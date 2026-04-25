# 📌 Hostinger Deploy - Quick Checklist

## ✅ Local Build Complete!

Your app is ready. Build files are in:
```
client/dist/              ← Frontend (upload to Hostinger)
server/server.js          ← Backend (upload to Hostinger)
package.json              ← Configuration
```

---

## 📤 Upload These Files to Hostinger:

### Step 1: Upload Frontend
```
FROM: c:\Users\Admin\Downloads\New folder (10)\client\dist\*
TO:   Hostinger/public_html/public/
```
✅ Upload બધી files (index.html, assets/, etc.)

### Step 2: Upload Backend
```
FROM: c:\Users\Admin\Downloads\New folder (10)\server\server.js
TO:   Hostinger/public_html/server.js

FROM: c:\Users\Admin\Downloads\New folder (10)\package.json
TO:   Hostinger/public_html/package.json
```

### Step 3: Create Folders in Hostinger
```
public_html/uploads/              (empty folder)
public_html/public/               (for frontend)
```

---

## ⚙️ Hostinger Settings:

1. Enable Node.js (v18+)
2. Set startup file: `server.js`
3. Set environment:
   ```
   PORT=5000
   NODE_ENV=production
   ```

---

## 💻 Terminal Commands in Hostinger:

```bash
cd /home/yourusername/public_html
npm install --production
npm start
```

---

## ✅ Test:

- Visit: https://yourdomain.com
- Should see OCR interface ✓
- Try uploading image ✓
- Extract text in 3 languages ✓

---

## 📁 File Structure (After Upload):

```
Hostinger public_html/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── css file
│   │   ├── js file
│   └── (more files)
├── uploads/
├── server.js
└── package.json
```

---

**Need help? Check DEPLOYMENT_STEPS.md or HOSTINGER_DEPLOY.md!** 🚀
