# 🖥️ Hostinger VPS - Node.js OCR App Deploy Guide

## ✨ VPS Deploy Advantages vs Shared Hosting:

✅ **Full Node.js Support** (No limitations)  
✅ **Root/Admin Access** (Install anything)  
✅ **Better Performance** (More resources)  
✅ **Custom Domains** (Multiple)  
✅ **SSL/HTTPS** (Free with Hostinger)  
✅ **Process Manager** (PM2 for auto-restart)  
✅ **Database Support** (MongoDB, MySQL, etc.)  

---

## 🚀 **Step 1: Access VPS Terminal**

### Via Hostinger Hpanel (Easiest):

1. **Hostinger Dashboard** → https://hpanel.hostinger.com/
2. **VPS** select કરો
3. Left menu માં **Console** શોધો
4. **Terminal** / **SSH** click કરો
5. Browser terminal ખુલશે

### Or Via Command Line:
```bash
ssh root@your_vps_ip_address
# Or
ssh username@your_vps_domain
```

---

## 📋 **Step 2: Prerequisites Check**

```bash
# Check Node.js
node --version

# Check npm
npm --version

# Check Git (optional but useful)
git --version
```

**If not installed:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (Ubuntu 24.04)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version
```

---

## 📁 **Step 3: Setup Project Directory**

```bash
# Create app directory
mkdir -p /var/www/ocr-app
cd /var/www/ocr-app

# Or use home directory
mkdir -p ~/ocr-app
cd ~/ocr-app
```

---

## 📤 **Step 4: Upload Files to VPS**

### Option A: Using SCP (Command Line)

From your local computer:
```bash
# Upload entire project
scp -r "c:\Users\Admin\Downloads\New folder (10)\*" root@your_vps_ip:/var/www/ocr-app/

# Or specific files:
scp "c:\Users\Admin\Downloads\New folder (10)\package.json" root@your_vps_ip:/var/www/ocr-app/
scp "c:\Users\Admin\Downloads\New folder (10)\server.js" root@your_vps_ip:/var/www/ocr-app/server/
```

### Option B: Using SFTP (FileZilla)

1. Download FileZilla
2. Host: your_vps_ip
3. Username: root
4. Password: Your VPS password
5. Upload files via drag & drop

### Option C: Using Git (Best)

```bash
# On VPS
cd /var/www/ocr-app
git clone https://your-repo-url .
# Or
git pull origin main
```

---

## 🔧 **Step 5: Install Dependencies**

```bash
# Navigate to project
cd /var/www/ocr-app

# Install all dependencies
npm install

# Or production only (lighter)
npm install --production

# Verify installation
npm list
```

---

## 🚀 **Step 6: Start Application**

### Option A: Direct Start (Testing)
```bash
npm start
```

You'll see:
```
OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi
```

### Option B: Using PM2 (Recommended - Auto Restart)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start app with PM2
pm2 start server.js --name "ocr-app"

# Make it auto-start on reboot
pm2 startup
pm2 save

# View status
pm2 status

# View logs
pm2 logs ocr-app
```

---

## 🌐 **Step 7: Setup Nginx Reverse Proxy**

```bash
# Install Nginx
sudo apt install -y nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/ocr-app
```

Add this content:
```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:
```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/ocr-app /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 🔒 **Step 8: Setup SSL Certificate (HTTPS)**

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your_domain.com -d www.your_domain.com

# Auto-renewal (already enabled)
sudo systemctl enable certbot.timer
```

---

## 📊 **Step 9: Configure Firewall**

```bash
# Enable UFW
sudo ufw enable

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Check status
sudo ufw status
```

---

## 📝 **Step 10: Environment Variables**

```bash
# Create .env file
nano /var/www/ocr-app/.env
```

Add:
```
PORT=5000
NODE_ENV=production
UPLOAD_DIR=/var/www/ocr-app/uploads
```

---

## 🧪 **Step 11: Test Everything**

```bash
# Test API Health
curl http://localhost:5000/api/health

# Test Languages
curl http://localhost:5000/api/languages

# Test via domain
curl https://your_domain.com/api/health
```

---

## 📂 **VPS Project Structure**

```
/var/www/ocr-app/
├── server.js
├── package.json
├── package-lock.json
├── client/
│   ├── src/
│   ├── dist/
│   ├── vite.config.js
│   └── package.json
├── uploads/                 ← Auto-created
├── node_modules/           ← Auto-created
├── .env                    ← Your env variables
└── logs/                   ← PM2 logs
```

---

## 🎯 **Full Deploy in 5 Commands:**

```bash
# 1. Connect to VPS
ssh root@your_vps_ip

# 2. Setup
cd /var/www/ocr-app && npm install

# 3. Start
npm start

# 4. Or with PM2
sudo npm install -g pm2 && pm2 start server.js && pm2 save

# 5. Test
curl https://your_domain.com
```

---

## 🔧 **Useful Commands**

### PM2 Management:
```bash
pm2 list                    # See all apps
pm2 restart ocr-app         # Restart
pm2 stop ocr-app            # Stop
pm2 delete ocr-app          # Remove
pm2 logs ocr-app            # View logs
pm2 logs ocr-app --lines 100 # Last 100 lines
```

### System Monitoring:
```bash
top                         # CPU/Memory usage
free -h                     # RAM info
df -h                       # Disk space
netstat -tulpn              # Port usage
ps aux | grep node          # Node processes
```

### Nginx Management:
```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx
sudo nginx -t               # Test config
```

### Log Files:
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
pm2 logs ocr-app
```

---

## 🚨 **Troubleshooting**

### Port 5000 Already in Use:
```bash
lsof -i :5000
kill -9 [PID]

# Or change port in .env
PORT=3000
```

### Permission Issues:
```bash
sudo chown -R $USER:$USER /var/www/ocr-app
chmod -R 755 /var/www/ocr-app
chmod -R 755 /var/www/ocr-app/uploads
```

### Node Modules Issues:
```bash
rm -rf node_modules package-lock.json
npm install --production
```

### Nginx Not Working:
```bash
sudo nginx -t                           # Test
sudo systemctl restart nginx            # Restart
sudo tail -f /var/log/nginx/error.log  # Check errors
```

---

## 🛡️ **Security Best Practices**

```bash
# Create non-root user
sudo useradd -m -s /bin/bash appuser
sudo usermod -aG sudo appuser

# Run app as non-root
sudo chown -R appuser:appuser /var/www/ocr-app

# Update regularly
sudo apt update && sudo apt upgrade -y

# Check security
sudo ufw status
```

---

## 📊 **Performance Optimization**

### Increase Uploading Limits:
```bash
# In server.js
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
```

### Nginx Optimization:
```bash
sudo nano /etc/nginx/nginx.conf
```

Add:
```nginx
worker_processes auto;
worker_connections 2048;
```

---

## 🎨 **Final Checklist**

- [ ] SSH access to VPS working
- [ ] Node.js v20+ installed
- [ ] Project files uploaded
- [ ] npm install completed
- [ ] PM2 installed & running
- [ ] Nginx configured & running
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Domain pointing to VPS
- [ ] http://domain.com loads ✓
- [ ] API endpoints working ✓
- [ ] File uploads working ✓
- [ ] OCR processing working ✓

---

## 🎯 **Next: Domain Setup**

Your domain registrar માં:
1. A Record: your_vps_ip
2. Wait 24 hours for propagation
3. Test: https://your_domain.com

---

## 📞 **Common Questions**

**Q: Can I run multiple apps?**
A: Yes! PM2 can run many apps simultaneously

**Q: How to update code?**
A: Pull from git / Upload new files / Restart PM2

**Q: How to backup?**
A: `tar -czf backup.tar.gz /var/www/ocr-app/`

**Q: Performance issues?**
A: Monitor with `pm2 monit` / Check server resources

---

**VPS પર Deploy માટે તૈયાર છો?** 🚀
