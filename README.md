# 🔤 Multilingual OCR Software
**English • ગુજરાતી • हिन्दी**

Extract text from images in **English, Gujarati, and Hindi** using advanced Optical Character Recognition technology.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-18+-brightgreen)

## 🎯 Features

- **Multi-Language OCR**: English, Gujarati, and Hindi text recognition
- **Multiple Input Methods**:
  - 📸 Single image upload
  - 🎥 Real-time camera capture
  - 📁 Batch processing (up to 10 images)
- **High Accuracy**: Tesseract.js engine with image preprocessing
- **Fast Processing**: Optimized image handling and parallel processing
- **Modern UI**: Beautiful, responsive web interface
- **Drag & Drop**: Easy file upload
- **Copy & Export**: Extract and copy results easily

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18 or higher
- **npm** 9 or higher

### Installation

```bash
# Clone or download the project
cd ocr-multilingual

# Install all dependencies
npm install --workspaces
```

### Development Mode

```bash
# Start both backend and frontend
npm run dev
```

Then open your browser and visit:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📖 Usage Guide

### Single Image OCR
1. Click on "📷 Single Image" tab
2. Select or drag & drop an image (PNG, JPG, WEBP)
3. Choose language(s) from dropdown
4. Click "Extract Text" button
5. View and copy extracted text

### Camera Capture
1. Click on "📹 Camera" tab
2. Click "Start Camera" button
3. Grant camera permission if prompted
4. Click "📷 Capture" to take photo
5. Review and click "Extract Text"

### Batch Processing
1. Click on "📁 Batch Upload" tab
2. Upload up to 10 images at once (drag & drop or click)
3. Select language(s)
4. Click "Extract Text from X Images"
5. View results for each image

### Language Selection
- **English Only** - For English text documents
- **Gujarati Only** - For ગુજરાતી text
- **Hindi Only** - For हिन्दी text
- **Combined** - For mixed-language documents (recommended for general use)

## 🏗️ Project Structure

```
ocr-multilingual/
├── server/                 # Node.js backend
│   ├── server.js          # Express server & API routes
│   └── package.json       # Backend dependencies
├── client/                # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── components/    # UI components
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML entry point
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Frontend dependencies
├── .github/
│   └── copilot-instructions.md  # Development guide
└── README.md              # This file
```

## 🔌 API Endpoints

### Single Image OCR
```
POST /api/ocr
Content-Type: multipart/form-data

Parameters:
- image: File (PNG, JPG, WEBP)
- language: string (default: "eng+guj+hin")

Response:
{
  "success": true,
  "text": "extracted text...",
  "confidence": 0.95,
  "language": "eng+guj+hin"
}
```

### Batch Processing
```
POST /api/ocr/batch
Content-Type: multipart/form-data

Parameters:
- images: File[] (up to 10 files)
- language: string (default: "eng+guj+hin")

Response:
{
  "success": true,
  "results": [
    {
      "filename": "image1.jpg",
      "text": "...",
      "confidence": 0.92,
      "success": true
    }
  ],
  "totalProcessed": 5,
  "successCount": 5
}
```

### Supported Languages
```
GET /api/languages

Response:
{
  "languages": [
    { "code": "eng", "name": "English", "nativeName": "English" },
    { "code": "guj", "name": "Gujarati", "nativeName": "ગુજરાતી" },
    { "code": "hin", "name": "Hindi", "nativeName": "हिन्दी" }
  ],
  "default": "eng+guj+hin"
}
```

### Health Check
```
GET /api/health

Response:
{
  "status": "Server is running",
  "timestamp": "2024-04-24T10:30:00Z"
}
```

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=development
```

### Image Processing
- **Max File Size**: 50MB per image
- **Supported Formats**: PNG, JPG, WEBP
- **Optimization**: Automatic resize to 2000x2000px, grayscale conversion
- **Batch Limit**: 10 images per batch request

## 📊 Performance

- **First OCR Run**: 1-2 minutes (Tesseract downloads language data ~60MB)
- **Single Image**: 5-15 seconds (varies by image size and complexity)
- **Batch Processing**: Sequential processing, ~5-15s per image
- **Image Preprocessing**: <1 second per image

## 🛠️ Troubleshooting

### Issue: OCR is very slow on first run
**Solution**: This is normal. Tesseract downloads language data on first use. Subsequent runs will be faster.

### Issue: Camera not working
**Solutions**:
- Check browser camera permissions
- Ensure HTTPS is used in production
- Try a different browser (Chrome, Firefox recommended)
- Clear browser cache and cookies

### Issue: Poor OCR accuracy
**Solutions**:
- Ensure good image lighting and contrast
- Use images with at least 150 DPI resolution
- Avoid skewed or rotated text
- Use highest quality image format (PNG preferred)
- Try combining all languages if text is mixed

### Issue: "Port already in use" error
**Solution**: Change the PORT in server/package.json or set environment variable:
```bash
PORT=5001 npm run dev
```

### Issue: "Cannot find module" error
**Solution**: Reinstall dependencies:
```bash
npm install --workspaces
```

## 🔐 Security Considerations

- Files are uploaded to temporary directory and deleted after processing
- No files are permanently stored on the server
- Maximum file size limits prevent abuse
- Multer validates file types
- CORS enabled for localhost development

## 📦 Dependencies

### Backend
- **express**: Web framework
- **multer**: File upload handling
- **cors**: CORS middleware
- **tesseract.js**: OCR engine
- **sharp**: Image processing
- **dotenv**: Environment configuration

### Frontend
- **react**: UI framework
- **axios**: HTTP client
- **vite**: Build tool

## 🚀 Deployment

### Heroku
```bash
# Add Procfile
echo "web: npm start --workspace=server" > Procfile

# Deploy
git push heroku main
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --workspaces

EXPOSE 3000 5000

CMD ["npm", "run", "dev"]
```

### Vercel/Netlify (Frontend Only)
```bash
# Build frontend for deployment
npm run build --workspace=client

# Deploy the client/dist folder
```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📧 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the `.github/copilot-instructions.md` file
3. Check browser console for error messages

## 🎓 Learning Resources

- [Tesseract.js Documentation](https://tesseract.projectnaptha.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🙏 Acknowledgments

- **Tesseract.js**: For the OCR engine
- **Sharp**: For image processing
- **Express.js**: For the web framework
- **React**: For the UI framework

---

**Made with ❤️ for multilingual text recognition**

*Last Updated: April 24, 2026*
