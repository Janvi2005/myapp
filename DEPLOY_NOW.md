# 📤 Hostinger Shared Hosting - Deploy Now! (4 Simple Steps)

## Step 1️⃣: Build Your App Locally ✓ DONE

```powershell
# Already done:
npm run build
```

Files ready in:
```
c:\Users\Admin\Downloads\New folder (10)\client\dist\
```

---

## Step 2️⃣: Upload Frontend to Hostinger

1. **Hostinger Dashboard** ખોલો
2. **File Manager** → **public_html** ખોલો
3. **public** નામનો folder create કરો (આવેલો ન હોય તો)
4. **client/dist/** ના બધી files **public/** માં upload કરો

```
Upload from:  c:\Users\Admin\Downloads\New folder (10)\client\dist\*
Upload to:    Hostinger public_html/public/
```

**Files to Upload:**
- index.html ✓
- assets/ folder ✓
- બધી files ✓

---

## Step 3️⃣: Upload Backend to Hostinger

1. **Hostinger File Manager** ખોલેલો રાખ
2. **public_html** માં જાઓ
3. આ 2 files upload કરો:

```
From: c:\Users\Admin\Downloads\New folder (10)\server\server.js
To:   public_html/server.js

From: c:\Users\Admin\Downloads\New folder (10)\package.json
To:   public_html/package.json
```

4. **uploads** નામનો empty folder create કરો

---

## Step 4️⃣: Configure Hostinger & Start

### 4A: Hostinger Settings:

1. **Hostinger Dashboard** જાઓ
2. **Settings** / **Node.js** શોધો
3. **Enable Node.js** click કરો
4. Version: **18 or higher** select કરો

### 4B: Terminal Commands (Hostinger Terminal):

1. Hostinger Dashboard → **Advanced** → **Terminal**
2. આ commands paste કરો:

```bash
cd /home/yourusername/public_html
npm install --production
npm start
```

(Replace `yourusername` તમારું username સાથે)

---

## ✅ Done! Test કરો:

### Open in Browser:
```
https://yourdomain.com
```

You'll see:
```
🔤 Multilingual OCR Interface
Select language → Upload image → Extract text!
```

---

## 🎯 Hostinger Username ક્યાં મળશે?

1. Hostinger Dashboard
2. Top Right → **Profile**
3. તમારું username દેખાશે
4. Or Dashboard → **Account** → **Username**

Example:
```
yourusername = "abc12345" (from email prefix)
```

---

## 📁 Final Structure (Hostinger):

```
public_html/
├── public/
│   ├── index.html ✓
│   ├── assets/
│   │   ├── index-D3PWsgHd.css ✓
│   │   └── index-3G4Jxacp.js ✓
├── uploads/ ✓
├── server.js ✓
└── package.json ✓
```

---

## ⚠️ If Still Not Working:

### Problem 1: "Cannot find module"
```bash
cd /home/yourusername/public_html
npm install --production --force
npm start
```

### Problem 2: "Permission denied"
```bash
chmod 755 /home/yourusername/public_html/uploads
```

### Problem 3: "Port 5000 in use"
```bash
sudo lsof -i :5000
sudo kill -9 [PID]
```

---

## 🔍 Test API:

```bash
curl https://yourdomain.com/api/health

# Should return:
{"status":"Server is running","timestamp":"..."}
```

---

## 📊 Quick Checklist:

- [ ] client/dist/* uploaded to public/
- [ ] server.js uploaded
- [ ] package.json uploaded
- [ ] uploads/ folder created
- [ ] Node.js enabled in Hostinger
- [ ] npm install run
- [ ] npm start done
- [ ] https://yourdomain.com opens ✓
- [ ] Image upload works ✓
- [ ] Text extraction works ✓

---

## 🎉 Success Indicators:

✓ Frontend loads (http://yourdomain.com)  
✓ Language dropdown visible  
✓ Upload button works  
✓ OCR processes images  

---

**Ready to deploy?** Follow these 4 steps! 🚀
