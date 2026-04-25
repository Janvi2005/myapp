# 🖥️ Hostinger VPS - Deploy Now! (Super Easy)

## ✅ VPS વાપર કર - શેના માટે Best છે?

✅ **Full Node.js Support** (No limitations)
✅ **Better Performance** (Faster)
✅ **More Resources** (More power)
✅ **Auto-restart** (PM2)
✅ **Free SSL** (HTTPS)

---

## 🚀 **VPS Deploy - 6 Simple Steps**

---

## **Step 1: Files Prepare કર (Local)**

```powershell
# Windows PowerShell માં:
cd "c:\Users\Admin\Downloads\New folder (10)"
npm run build
```

તમને આ files મળશે:
```
client/dist/          ← Frontend ready
server/server.js      ← Backend ready
package.json          ← Config ready
```

---

## **Step 2: Hostinger VPS Console ખોલ**

### Path:
```
https://hpanel.hostinger.com/
  ↓
Your VPS Select
  ↓
Console / Terminal ← HERE!
```

### Screen આવશે:
```
┌──────────────────────────┐
│ VPS Console              │
│                          │
│ bash-4.2$               │
│ (Ready for commands)     │
└──────────────────────────┘
```

---

## **Step 3: Folder Setup (VPS માં)**

### Command 1: Create App Folder
```bash
mkdir -p /home/ocr-app
cd /home/ocr-app
```
Press Enter

---

## **Step 4: Upload Files (VPS માં)**

### Option A: Using SCP (Command Line)

From your Windows:
```powershell
# Local computer માંથી:
scp -r "c:\Users\Admin\Downloads\New folder (10)\*" root@your_vps_ip:/home/ocr-app/
```

### Option B: Using FileZilla (Easy)

1. **FileZilla Download** → https://filezilla-project.org/
2. **Open FileZilla**
3. Fill:
   ```
   Host: your_vps_ip
   Username: root
   Password: Your VPS Password
   Port: 22
   ```
4. **Quickconnect**
5. Upload files via Drag & Drop

---

## **Step 5: Install & Start (VPS Terminal)**

### In Hostinger VPS Console:

```bash
cd /home/ocr-app
npm install
npm start
```

Success message:
```
OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi
```

---

## **Step 6: Access Your App**

### Open Browser:
```
http://your_vps_ip:5000
```

You'll see:
```
🔤 Multilingual OCR
Upload image...
```

---

## 🎯 **VPS Deployment - Quick Path:**

```
1. Build locally:        npm run build ✓
2. Open VPS Console:     Hpanel → VPS → Console ✓
3. Setup folder:         mkdir -p /home/ocr-app ✓
4. Upload files:         SCP or FileZilla ✓
5. Install deps:         npm install ✓
6. Start app:            npm start ✓
7. Open browser:         http://your_vps_ip:5000 ✓
```

---

## 📋 **VPS Console ક્યાં છે?**

### Hostinger Hpanel:

```
1. https://hpanel.hostinger.com/ ખોલ
2. Your VPS Product Select
3. Left Menu -> "Console" અથવા "Terminal"
4. "Open Console" Click
5. Terminal Window Opens!
```

---

## 🔧 **VPS Terminal Commands:**

```bash
# Navigate
cd /home/ocr-app

# Install
npm install

# Start
npm start

# Check status
curl http://localhost:5000/api/health

# View logs
npm logs
```

---

## ✅ **Success દેખશે આવું:**

Terminal માં:
```
OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi
```

Browser માં:
```
http://your_vps_ip:5000
🔤 Multilingual OCR Interface ✓
```

---

## 📁 **VPS File Structure:**

```
/home/ocr-app/
├── client/
│   ├── dist/
│   └── ...
├── server/
│   └── server.js
├── package.json
├── uploads/              ← Auto-created
└── node_modules/         ← Auto-created
```

---

## 🎯 **VPS IP ક્યાંથી મળશે?**

### Hostinger Dashboard:
```
VPS Product ← Click
┌──────────────────────┐
│ IP Address: 1.2.3.4  │  ← HERE!
│ Status: Active ✓     │
│ Location: EU         │
└──────────────────────┘
```

---

## 🚀 **Next: Setup Domain (Optional)**

```
Your domain registrar માં:
A Record: 1.2.3.4 (Your VPS IP)

Wait 24 hours...

Then: https://yourdomain.com:5000
```

---

## 💾 **Backup Commands (VPS):**

```bash
# Backup everything
tar -czf backup.tar.gz /home/ocr-app/

# Restore
tar -xzf backup.tar.gz
```

---

## 🔒 **Security (VPS):**

```bash
# Change password
passwd

# Update system
apt update && apt upgrade

# Firewall
ufw enable
ufw allow 5000/tcp
```

---

## 📊 **VPS vs Shared Comparison:**

| Feature | Shared | VPS |
|---------|--------|-----|
| Node.js | Limited | ✅ Full |
| Performance | Slow | ✅ Fast |
| Resources | Shared | ✅ Dedicated |
| Control | None | ✅ Full |
| Price | Low | Medium |

---

## 🎬 **Exact Steps:**

```
Step 1: npm run build
   └─ Local PC માં

Step 2: Open Hpanel Console
   └─ Hpanel → VPS → Console

Step 3: mkdir -p /home/ocr-app
   └─ Create folder

Step 4: Upload files
   └─ FileZilla or SCP

Step 5: npm install
   └─ Terminal માં

Step 6: npm start
   └─ Terminal માં

Step 7: Open browser
   └─ http://your_vps_ip:5000

Done! 🎉
```

---

## ❓ **FAQ:**

**Q: VPS IP ક્યું છે?**
A: Hostinger Dashboard → Your VPS → IP Address

**Q: Node.js Install થયું છે?**
A: Yes, pre-installed in Hostinger VPS

**Q: npm install લાંબો છે?**
A: 2-5 મિનિટ તો લાગશે

**Q: App Run રાખવું છે?**
A: Use PM2 (auto-restart)

---

## 🎯 **PM2 વાપર (Auto-Restart):**

```bash
# Install PM2 globally
npm install -g pm2

# Start app
pm2 start /home/ocr-app/server.js

# Auto-start on reboot
pm2 startup
pm2 save

# Status
pm2 status
```

---

## 📞 **Help પૂછો:**

1. **Hpanel → Support**
2. **Tell:** "I have Node.js app, need deployment help"
3. **They'll help!** ✓

---

**Ready? આ Steps Follow કર!** 🚀

1. npm run build
2. Open VPS Console
3. Upload files
4. npm install
5. npm start
6. Open browser

Done! ✨
