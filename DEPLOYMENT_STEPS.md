# 📤 Hostinger Shared Hosting Deploy - Complete Guide

## ✅ Build Complete! Files Ready:

```
client/dist/            ← Frontend (ready)
server/server.js        ← Backend (ready)
package.json            ← Root
```

---

## 🚀 Step 1: Hostinger Dashboard લો ખોલો

1. https://hpanel.hostinger.com/ પર લોગિન કરો
2. તમારું Domain select કરો
3. **File Manager** → **public_html** ખોલો

---

## 📁 Step 2: Folder Structure Setup

Hostinger ના public_html માં આવું structure બનાવો:

```
public_html/
├── public/                    ← Frontend files (create કરો)
│   ├── index.html
│   ├── assets/
│   │   ├── index-D3PWsgHd.css
│   │   └── index-3G4Jxacp.js
│   └── favicon.ico
├── uploads/                   ← Upload folder (create કરો)
├── node_modules/              ← npm install બાદ auto
├── server.js                  ← Copy કરો
└── package.json               ← Copy કરો
```

---

## 📋 Step 3: Files Upload કરો

### Using FileManager:

**1. Frontend Files Upload:**
```
Local: c:\Users\Admin\Downloads\New folder (10)\client\dist\*
Upload to: public_html/public/
```

- `index.html` ની છે?
- `assets/` folder ની છે?

**2. Backend Files Upload:**
```
Local: c:\Users\Admin\Downloads\New folder (10)\server\server.js
Upload to: public_html/server.js

Local: c:\Users\Admin\Downloads\New folder (10)\package.json
Upload to: public_html/package.json
```

**3. Create folders:**
- `public_html/uploads/` (empty folder)
- `public_html/node_modules/` (will be created by npm)

---

## ⚙️ Step 4: Hostinger Settings

### 4.1 Node.js Enable કરો:

1. Hostinger Dashboard → **Settings**
2. **Node.js** section શોધો
3. **Enable Node.js** click કરો
4. Version: **18+** select કરો
5. **Node.js version**: v20 recommended

### 4.2 App Settings:

1. **App URL**: તમારું domain
2. **Application root**: `public_html`
3. **Application startup file**: `server.js`
4. **Main file**: `server.js`

### 4.3 Environment Variables:

```
PORT = 5000
NODE_ENV = production
```

---

## 💻 Step 5: Terminal Commands (Hostinger Terminal):

Hostinger માં **Terminal** feature આવે તો:

```bash
# Navigate
cd /home/yourusername/public_html

# Install dependencies
npm install --production

# Test
npm start
```

---

## 🔍 Step 6: Test કરો

### Check 1: Status
```bash
curl https://yourdomain.com/api/health
```

Expected Response:
```json
{"status":"Server is running","timestamp":"2026-04-24T10:30:00Z"}
```

### Check 2: Languages
```bash
curl https://yourdomain.com/api/languages
```

### Check 3: Frontend
Open: https://yourdomain.com

Should see: **🔤 Multilingual OCR** interface

---

## ❌ Troubleshooting

### Problem 1: "Cannot find module 'express'"

**Solution:**
```bash
cd /home/yourusername/public_html
npm install
```

### Problem 2: "Port already in use"

**Solution:**
```bash
# Kill existing process
lsof -ti:5000 | xargs kill -9

# Or change port in Hostinger settings
PORT=5001
```

### Problem 3: "File upload not working"

**Solution:**
- Create `uploads/` folder with full permissions (755)
- Verify folder exists: `ls -la uploads/`

### Problem 4: Frontend loads but API not working

**Solution:**
```javascript
// In client App.jsx, change:
const API_URL = window.location.origin;
// Instead of:
const API_URL = '/api';
```

### Problem 5: CORS Error

**Solution - Add to server.js:**
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

---

## 📊 Expected Directory Structure (After Deploy):

```
public_html/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── index-D3PWsgHd.css (153 kB)
│   │   └── index-3G4Jxacp.js (154 kB)
│   └── (static files)
├── uploads/                      ← Generated after first upload
├── node_modules/                 ← Created by npm install
├── package.json                  ← 5.8 kB
├── server.js                     ← 6.2 kB
└── (other config files)
```

---

## 🔑 Important Files to Keep:

```
✅ Must keep:
- server.js
- package.json
- public/ (frontend build)

✅ Auto-generated (don't worry):
- node_modules/
- uploads/
- .env

❌ Don't upload:
- .git/
- src/ (source, not needed)
- node_modules/ (will install fresh)
```

---

## 🚀 Final Checklist:

- [ ] Node.js enabled in Hostinger
- [ ] server.js uploaded
- [ ] package.json uploaded
- [ ] client/dist/* uploaded to public/
- [ ] uploads/ folder created
- [ ] npm install --production ran
- [ ] Environment variables set
- [ ] Frontend loads at yourdomain.com
- [ ] API works at yourdomain.com/api/health
- [ ] File upload works
- [ ] OCR extraction works

---

## 📞 If Still Not Working:

1. **Check Hostinger Logs:**
   - Dashboard → Logs → Application Logs
   - Read error messages carefully

2. **Check File Permissions:**
   ```bash
   chmod 755 uploads/
   chmod 644 server.js
   chmod 644 package.json
   ```

3. **Test Locally First:**
   - Run `npm run dev` locally
   - Verify working before uploading

4. **Alternative: Backend Separately:**
   - Frontend: Hostinger (HTML/CSS/JS only)
   - Backend: Railway/Render (Node.js)
   - Frontend call backend API

---

## 💡 Pro Tips:

**Tip 1:** Hostinger માં `.htaccess` બનાવો (frontend routing માટે):
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

**Tip 2:** PM2 વાપરો (auto-restart માટે):
```bash
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

**Tip 3:** Logs Check:
```bash
pm2 logs server.js
```

---

## 🎯 Success Signs:

✅ Frontend લોડ થાય છે  
✅ Language selector visible છે  
✅ File upload possible છે  
✅ OCR extraction થાય છે  
✅ Text copy થાય છે  

---

**Ready? આ steps follow કર અને મને update કર!** 🚀
