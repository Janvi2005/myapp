# 📋 Installation & Setup Guide

## Prerequisites

Before starting, make sure you have these installed:

1. **Node.js 18+** → Download from https://nodejs.org/
   - Choose LTS version
   - Installer will include npm automatically
   
2. **npm 9+** (usually comes with Node.js)
   - Verify: Open PowerShell/Command Prompt and run: `npm --version`

## Step-by-Step Setup

### 1️⃣ After Installing Node.js
Restart your computer or terminal to ensure PATH is updated.

### 2️⃣ Navigate to Project
```powershell
cd "c:\Users\Admin\Downloads\New folder (10)"
```

### 3️⃣ Install All Dependencies
```powershell
npm install --workspaces
```

This will install:
- **Backend**: Express, Tesseract.js, Sharp, Multer, CORS
- **Frontend**: React, Vite, Axios

### 4️⃣ Start Development Mode
```powershell
npm run dev
```

This launches:
- ✅ **Backend** on http://localhost:5000
- ✅ **Frontend** on http://localhost:3000

### 5️⃣ Open in Browser
Visit: **http://localhost:3000**

## What You'll See

### Three Main Tabs:
1. **📷 Single Image** - Upload one image and extract text
2. **📹 Camera** - Capture photos directly from your device camera
3. **📁 Batch Upload** - Process up to 10 images at once

### Language Options:
- English Only
- Gujarati Only (ગુજરાતી)
- Hindi Only (हिन्दी)
- Any combination of the three

## Key Features

✨ **Supported Languages**: English, Gujarati, Hindi

📸 **Input Methods**:
- Click to upload images
- Drag & drop support
- Real-time camera capture
- Batch upload (up to 10 images)

📊 **Output**:
- Extracted text display
- Confidence score (accuracy %)
- Copy to clipboard button
- Batch results summary

## Important Notes

### First Run
⚠️ The first OCR request may take **1-2 minutes**. This is normal as Tesseract downloads language data (~60MB).

### Image Requirements
- Formats: PNG, JPG, WEBP
- Max size: 50MB per image
- Best accuracy: Clear, well-lit images with good contrast

### Camera Access
- Modern browsers require HTTPS for camera in production
- In development (localhost), HTTP works fine
- Check browser permissions if camera doesn't work

## Build for Production

```powershell
# Build both frontend and backend
npm run build

# Create optimized production files
# Frontend: client/dist/
# Backend: ready to deploy
```

## Troubleshooting

### ❌ "npm: The term is not recognized"
**Solution**: Restart your terminal after installing Node.js

### ❌ "Port 5000 already in use"
**Solution**: Change port in server/package.json or use:
```powershell
$env:PORT=5001; npm run dev
```

### ❌ "Cannot find module"
**Solution**: Run again:
```powershell
npm install --workspaces
```

### ❌ Camera not working
- Check browser permissions
- Try Chrome or Firefox
- Ensure you're on localhost in development
- Clear browser cache

### ❌ OCR accuracy is poor
- Use higher resolution images (150+ DPI)
- Ensure good lighting in photos
- Remove skew from document images
- Use PNG format for best results

## Project Structure

```
📦 ocr-multilingual
├── 📁 server/
│   ├── server.js ..................... Express API server
│   └── package.json .................. Backend dependencies
├── 📁 client/
│   ├── 📁 src/
│   │   ├── App.jsx ................... Main component
│   │   ├── components/
│   │   │   ├── ImageUpload.jsx ....... Single image upload
│   │   │   ├── CameraCapture.jsx ..... Camera capture
│   │   │   ├── BatchUpload.jsx ....... Batch upload
│   │   │   └── ResultDisplay.jsx ..... Results modal
│   │   └── index.css ................. Styles
│   ├── vite.config.js ................ Vite config
│   ├── index.html .................... Entry HTML
│   └── package.json .................. Frontend dependencies
├── 📁 .github/
│   └── copilot-instructions.md ....... Dev guide
├── README.md ......................... Full documentation
└── package.json ...................... Monorepo config
```

## How OCR Works

1. **Upload Image** → Browser sends to backend
2. **Image Optimization** → Sharp resizes to 2000x2000, converts to grayscale
3. **OCR Processing** → Tesseract.js recognizes text
4. **Confidence Score** → Accuracy percentage returned
5. **Display Results** → Text shown in UI, ready to copy

## API Endpoints

```
POST /api/ocr
- Single image to text conversion

POST /api/ocr/batch
- Multiple images (up to 10)

GET /api/languages
- List supported languages

GET /api/health
- Server health check
```

## Next Steps

1. ✅ Install Node.js from nodejs.org
2. ✅ Restart computer/terminal
3. ✅ Run: `cd "c:\Users\Admin\Downloads\New folder (10)" && npm install --workspaces`
4. ✅ Run: `npm run dev`
5. ✅ Open: http://localhost:3000
6. ✅ Start extracting text in multiple languages!

## Support & Resources

- **Tesseract.js**: https://tesseract.projectnaptha.com/
- **Express.js**: https://expressjs.com/
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/

---

**Happy OCR-ing! 🚀**
