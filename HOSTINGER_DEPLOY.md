# 🚀 Hostinger Shared Hosting par Deploy - Solutions

## Issue: Shared Hosting par Node.js App Nahi Chalta

### ✅ **Solution 1: Hostinger par Node.js Enable करो (Best)**

1. **Hostinger Dashboard ખોલો**
   - Settings → Node.js
   - "Enable Node.js" click કરો
   - Version 18+ select કરો

2. **App Repository Setup:**
   ```
   Public HTML folder → public (frontend dist files)
   Root folder → backend server
   ```

3. **package.json SET करो:**
   - Main file: `server.js`
   - Start command: `npm start`

---

### 📋 **Solution 2: Proper Folder Structure for Hostinger**

તમારા Hostinger account માં આવો structure હોવો જોઈએ:

```
public_html/
├── server.js ................... (Main file)
├── package.json ................
├── node_modules/ ...............
├── uploads/ ....................
├── client/ .....................
│   └── dist/ ................... (Build થયેલ frontend)
└── public/ ..................... (Frontend static files)
```

---

### 🛠️ **Solution 3: Deploy Step-by-Step**

#### Step 1: Local Build કરો
```powershell
cd "c:\Users\Admin\Downloads\New folder (10)"
npm run build
```

આ create કરશે:
- `client/dist/` (Frontend build)
- `server/` (Backend ready)

#### Step 2: Hostinger માં Upload કરો
FileManager વાપરીને upload કરો:
1. `server.js` → public_html/
2. `package.json` → public_html/
3. `client/dist/` → public_html/public/
4. `uploads/` folder create કરો

#### Step 3: Hostinger Terminal વાપરો (Shared Hosting માં)
```bash
cd /home/yourusername/public_html
npm install --production
npm start
```

---

### 💡 **Solution 4: For Shared Hosting (Simple)**

**Agar Node.js support nahi છે તો આ વાપરો:**

```
public_html/
├── index.html (Frontend)
├── css/ (styles)
├── js/ (scripts)
└── api.js (Static server)
```

Backend API calls ke liye:
- Separate subdomain setup કરો
- Ya API calls locally serve કરો

---

### 🔑 **Key Changes Needed:**

#### 1️⃣ **server.js માં Change:**

```javascript
// OLD
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// NEW - Hostinger માટે
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### 2️⃣ **Frontend API Calls Fix:**

```javascript
// OLD
const API_URL = 'http://localhost:5000';

// NEW - Production માટે
const API_URL = process.env.NODE_ENV === 'production' 
  ? window.location.origin 
  : 'http://localhost:5000';
```

#### 3️⃣ **Vite Build માટે:**

```javascript
// vite.config.js માં આ add કરો:
export default {
  build: {
    outDir: '../public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
}
```

---

### ✨ **Best Solution - Frontend + Backend Separate:**

```
✅ Frontend: Hostinger Shared Hosting
   - Vite Build થયેલ files
   - Static HTML/CSS/JS
   
✅ Backend: Separate Node.js Hosting
   - Railway.app (Free)
   - Render.com (Free)
   - Heroku
```

---

## 📊 **Recommended Setup for Hostinger Shared:**

### Only Frontend Deploy:
```
public_html/
├── index.html
├── dist/
│   ├── assets/
│   └── index-xxxxx.js
└── (Backend hosted separately)
```

### API Calls:
```javascript
const API_URL = 'https://your-backend-service.com/api';
fetch(`${API_URL}/ocr`, { method: 'POST', ... })
```

---

## 🚀 **Quick Fix - Offline to Online:**

### For Immediate Fix:

1. **Local build કરો:**
   ```powershell
   npm run build
   ```

2. **Upload only `client/dist/` to Hostinger**

3. **Backend separate service par deploy કરો:**
   - railway.app
   - render.com
   - cyclic.sh

4. **Frontend `.env` માં backend URL set કરો:**
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

---

## 🎯 **Hostinger Shared Hosting માટે Best Solution:**

```
Option A: Frontend-only Deploy
- Easy setup
- Fast loading
- Backend hosted elsewhere

Option B: With Hostinger Node.js Support
- Need to enable Node.js
- More control
- Need proper folder structure
```

---

**Kya kare? Kaunso option suit karte?**
- 🎯 Frontend-only Hostinger + Backend separate?
- 🎯 Ya full app Hostinger par (with Node.js enable)?
