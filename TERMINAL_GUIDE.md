# 🖥️ Hostinger Terminal - Access અને Commands

## 🚀 Hostinger Terminal Kaise Access કરે?

### **Method 1: Web Terminal (Easiest)**

1. **Hostinger Dashboard** ખોલો → https://hpanel.hostinger.com/
2. તમારું **Domain** select કરો
3. Left Side Menu માં શોધો:
   - **Advanced** → **Terminal** 
   - અથવા **Tools** → **Terminal**
4. **Open Terminal** click કરો
5. Browser માં terminal ખુલશે

---

## ⌨️ **Useful Terminal Shortcuts:**

### Navigation:
```
cd /path/to/folder        ← Go to folder
cd ..                     ← Go back one level
cd ~                      ← Go to home directory
pwd                       ← Show current path
ls                        ← List files
ls -la                    ← List with details
```

### npm Commands:
```
npm install               ← Install dependencies
npm install --production ← Only production deps
npm start                ← Start server
npm stop                 ← Stop server (Ctrl+C)
npm run build            ← Build app
```

### File Operations:
```
cp file.txt copy.txt     ← Copy file
mv file.txt folder/      ← Move file
rm file.txt              ← Delete file
mkdir folder_name        ← Create folder
touch file.txt           ← Create empty file
cat file.txt             ← View file content
```

### Permissions:
```
chmod 755 uploads/       ← Make executable
chmod 644 file.txt       ← Set permissions
chown user file.txt      ← Change owner
```

---

## 🎯 **OCR App Deploy માટે Commands:**

### Step 1: Navigate
```bash
cd /home/yourusername/public_html
```

### Step 2: Check Files
```bash
ls -la
```

Expected Output:
```
drwxr-xr-x  public/
drwxr-xr-x  uploads/
-rw-r--r--  server.js
-rw-r--r--  package.json
```

### Step 3: Install Dependencies
```bash
npm install --production
```

### Step 4: Test
```bash
npm start
```

You'll see:
```
OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi
```

### Step 5: Check if Running
```bash
curl http://localhost:5000/api/health
```

---

## 🔧 **Useful Shortcuts & Commands:**

### Terminal Navigation:
```
Ctrl + C         ← Stop current process
Ctrl + L         ← Clear screen (or type: clear)
Ctrl + A         ← Go to line start
Ctrl + E         ← Go to line end
Tab              ← Auto-complete
Up/Down Arrow    ← Previous commands
```

### Process Management:
```
ps aux           ← See running processes
ps aux | grep node ← Find Node.js processes
kill -9 PID      ← Kill process (e.g., kill -9 1234)
lsof -i :5000    ← See what's using port 5000
```

### File Editing (if needed):
```
nano file.txt    ← Edit file
vi file.txt      ← Edit with vi
cat > file.txt   ← Create file with content
```

---

## 🚀 **Quick Deploy Sequence:**

```bash
# 1. Navigate
cd /home/yourusername/public_html

# 2. Check files
ls -la

# 3. Check if package.json exists
cat package.json

# 4. Install
npm install --production

# 5. Start
npm start

# 6. Test (in another terminal/window)
curl http://localhost:5000/api/health
```

---

## ✅ **Success Indicators:**

✓ `npm install` complete - no errors  
✓ `npm start` shows "OCR Server running..."  
✓ `curl` returns JSON response  

---

## ⚠️ **Common Issues & Fixes:**

### Issue 1: "Cannot find module"
```bash
# Fix:
npm install --production --force
```

### Issue 2: "Port 5000 already in use"
```bash
# Find what's using it
lsof -i :5000

# Kill it
kill -9 [PID]

# Or change port in server.js
```

### Issue 3: "Permission denied"
```bash
# Fix permissions
chmod 755 uploads/
chmod 644 server.js
chmod 644 package.json
```

### Issue 4: Can't find public/ folder
```bash
# Create it
mkdir -p public/assets

# Upload frontend files
# Then restart
npm restart
```

---

## 📊 **File Structure Check:**

```bash
# Check structure
tree -L 2

# Or manual check:
ls -la
ls -la public/
ls -la uploads/
cat package.json | head -20
```

---

## 🔍 **Debugging:**

### View logs:
```bash
tail -f server.log       ← Real-time logs
tail -100 server.log     ← Last 100 lines
```

### Check Node.js:
```bash
node --version
npm --version
which node
```

### Test network:
```bash
curl http://localhost:5000/
curl http://localhost:5000/api/health
curl http://localhost:5000/api/languages
```

---

## 💾 **Backup Commands:**

```bash
# Backup entire app
tar -czf backup.tar.gz ./

# Restore from backup
tar -xzf backup.tar.gz

# Clean old uploads
rm -rf uploads/*.jpg
```

---

## 🎓 **Useful Tips:**

**Tip 1:** Screen multiplexing
```bash
screen                  ← Start screen
screen -ls             ← List screens
screen -r sessionname  ← Resume session
Ctrl + A + D          ← Detach screen
```

**Tip 2:** Background processes
```bash
npm start &            ← Run in background
jobs                   ← List background jobs
fg                     ← Bring to foreground
```

**Tip 3:** Monitor resources
```bash
top                    ← See CPU/Memory usage
free -h                ← Check RAM
df -h                  ← Check disk space
```

---

## 🎯 **One-Liner Deploy:**

```bash
cd /home/yourusername/public_html && npm install --production && npm start
```

---

## 📱 **For Mobile/SSH:**

If using SSH:
```bash
ssh username@yourdomain.com

# Then same commands:
cd public_html
npm install --production
npm start
```

---

## ✨ **Full Deploy Step-by-Step:**

```bash
# 1
cd /home/yourusername/public_html

# 2
echo "Files:" && ls -la

# 3
echo "Installing..." && npm install --production

# 4
echo "Done! Starting..." && npm start

# 5 (In another terminal)
echo "Testing..." && curl http://localhost:5000/api/health
```

---

## 🎨 **Nice Terminal Commands:**

```bash
# Colored listing
ls --color=auto

# Tree view
tree

# System info
uname -a

# Current user
whoami

# Disk usage
du -sh *

# Network info
ifconfig
```

---

## 🔐 **Security Tips:**

```bash
# Set proper permissions
chmod 755 public/
chmod 644 *.js
chmod 644 *.json

# Hide sensitive files
mv .env .env.local
chmod 600 .env

# Change ownership (if needed)
chown -R user:group ./
```

---

## 📞 **Still Confused?**

1. **Copy-paste આ command:**
   ```bash
   cd /home/yourusername/public_html && npm install --production
   ```
   (Replace yourusername સાથે તમારું Hostinger username)

2. **Then:**
   ```bash
   npm start
   ```

3. **Test:**
   ```bash
   curl http://localhost:5000/api/health
   ```

4. **Expected:** 
   ```json
   {"status":"Server is running","timestamp":"..."}
   ```

---

**Ready? Terminal ખોલ અને commands run કર! 🚀**
