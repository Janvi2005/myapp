import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Tesseract from 'tesseract.js';
import fs from 'fs';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// OCR endpoint for single image
app.post('/api/ocr', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const { language = 'eng+guj+hin' } = req.body;
    const imagePath = req.file.path;

    // Optimize image for OCR
    const optimizedPath = imagePath.replace(/\.[^.]+$/, '-optimized.png');
    await sharp(imagePath)
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .greyscale()
      .toFile(optimizedPath);

    // Perform OCR
    const result = await Tesseract.recognize(optimizedPath, language);
    
    // Clean up files
    fs.unlinkSync(imagePath);
    fs.unlinkSync(optimizedPath);

    res.json({
      success: true,
      text: result.data.text,
      confidence: result.data.confidence,
      language: language
    });
  } catch (error) {
    console.error('OCR Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Batch OCR endpoint
app.post('/api/ocr/batch', upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }

    const { language = 'eng+guj+hin' } = req.body;
    const results = [];

    for (const file of req.files) {
      try {
        const optimizedPath = file.path.replace(/\.[^.]+$/, '-optimized.png');
        await sharp(file.path)
          .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
          .greyscale()
          .toFile(optimizedPath);

        const result = await Tesseract.recognize(optimizedPath, language);
        
        results.push({
          filename: file.originalname,
          text: result.data.text,
          confidence: result.data.confidence,
          success: true
        });

        fs.unlinkSync(file.path);
        fs.unlinkSync(optimizedPath);
      } catch (error) {
        results.push({
          filename: file.originalname,
          error: error.message,
          success: false
        });
      }
    }

    res.json({
      success: true,
      results,
      totalProcessed: req.files.length,
      successCount: results.filter(r => r.success).length
    });
  } catch (error) {
    console.error('Batch OCR Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Supported languages endpoint
app.get('/api/languages', (req, res) => {
  res.json({
    languages: [
      { code: 'eng', name: 'English', nativeName: 'English' },
      { code: 'guj', name: 'Gujarati', nativeName: 'ગુજરાતી' },
      { code: 'hin', name: 'Hindi', nativeName: 'हिन्दी' }
    ],
    default: 'eng+guj+hin',
    info: 'Language codes can be combined with + for multi-language support'
  });
});

// For production on Hostinger/cloud hosting
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`OCR Server running on http://localhost:${PORT}`);
  console.log('Supported languages: English, Gujarati, Hindi');
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
