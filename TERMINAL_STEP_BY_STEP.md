# 🖥️ Step 3: Terminal Commands - ચોક્કસ કેવી રીતે કરવું?

## Terminal ક્યાંથી Access કરવું?

### **Hostinger Dashboard તોલ:**

1. https://hpanel.hostinger.com/ પર જાઓ
2. **Login** કરો તમારા email/password સાથે
3. તમારું **Domain** select કરો (left sidebar)
4. Left menu માં દેખો - આ શોધ:
   - **Advanced** → **Terminal** 
   - અથવા **Tools** → **Terminal**
   - અથવા **Console**

5. **"Open Terminal"** અથવા **"Open Console"** click કરો

---

## Terminal ખુલ્યું?

તમને કંઈક આવું દેખાશે:

```
bash-4.2$ 
```

અથવા:

```
[user@server ~]$ 
```

અથવા તો Browser માં text box દેખાશે।

---

## 📝 **Copy-Paste આ Commands:**

### **Command 1: Navigate (જાઓ તમારી folder માં)**

```bash
cd /home/yourusername/public_html
```

**Replace કરો:**
- `yourusername` = તમારું Hostinger username

**Example:**
```bash
cd /home/abc12345/public_html
```

Enter press કરો।

---

### **Command 2: Install Dependencies**

```bash
npm install --production
```

Enter press કરો।

**આ થશે:**
- Internet થી packages download થશે
- `node_modules` folder بنेगا
- 2-5 મિનિટ લાગશે

**Finished થશે ત્યારે:**
```
added XXX packages, audited XXX packages in Xs
```

---

### **Command 3: Start Server**

```bash
npm start
```

Enter press કરો।

**Success દેખશે:**
```
OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi
```

---

## ✅ થાય ગયું!

હવે તમારું app running છે!

---

## 🌐 **Test કરવું - Browser માં:**

Open કરો:
```
https://yourdomain.com
```

Or:
```
http://yourdomain.com:5000
```

તમને દેખાશે:
```
🔤 Multilingual OCR
```

---

## 📋 **Step-by-Step Pictures (Text Format):**

### **Step A: Hostinger Dashboard Open**
```
Login → Your Domain → Advanced → Terminal
```

### **Step B: Terminal ખુલ્યું**
```
You see: bash-4.2$ या [user@server ~]$
```

### **Step C: Command 1 Type કરો**
```
bash-4.2$ cd /home/yourusername/public_html
(Press Enter)
```

### **Step D: Command 2 Type કરો**
```
bash-4.2$ npm install --production
(Press Enter)
Wait 2-5 minutes...
```

### **Step E: Command 3 Type કરો**
```
bash-4.2$ npm start
(Press Enter)
```

### **Step F: Success!**
```
OCR Server running on http://localhost:5000 ✓
```

---

## 🎯 **Exact Username કેવી રીતે શોધવું?**

1. Hostinger Dashboard
2. Top Right Corner → તમારું **Profile** picture
3. **Settings** click કરો
4. **Username** લખેલું હશે (जैसे: `user12345`)

Or:

1. Hostinger Dashboard
2. **Account**
3. **Username** column

---

## ⚠️ **Common Issues & Fixes:**

### Issue 1: "Command not found: npm"
```
✗ Wrong - Node.js installed નથી
✓ Fix - Contact Hostinger support
```

### Issue 2: "Permission denied"
```
✗ Wrong folder
✓ Fix - Check username, use correct path
```

### Issue 3: "EACCES: permission denied"
```bash
# Try this:
npm install --production --force
```

### Issue 4: Takes Too Long
```
Don't worry - First install takes time
Let it run 5-10 minutes
```

---

## 🔍 **How to Check if Working:**

### In Terminal:
```bash
curl http://localhost:5000/api/health
```

Should see:
```json
{"status":"Server is running","timestamp":"..."}
```

### In Browser:
```
https://yourdomain.com
```

Should show:
```
🔤 Multilingual OCR Interface
Upload image...
```

---

## 📊 **Complete Terminal Session Example:**

```
[user@server ~]$ cd /home/user123456/public_html

[user@server public_html]$ npm install --production
npm WARN ... 
added 250 packages, audited 250 packages in 45s

[user@server public_html]$ npm start

> ocr-server@1.0.0 start
> node server.js

OCR Server running on http://localhost:5000
Supported languages: English, Gujarati, Hindi

[Successfully started!]
```

---

## 🚀 **Try Now - Exact Steps:**

```
1. Open: https://hpanel.hostinger.com/
2. Select Domain
3. Click: Advanced → Terminal
4. Copy this exactly:

cd /home/YOURusername/public_html

5. Press Enter

6. Then paste this:

npm install --production

7. Press Enter (Wait 5 min)

8. Then paste this:

npm start

9. Press Enter

10. See: "OCR Server running..." ✓

11. Open browser: https://yourdomain.com ✓
```

---

## 💡 **Pro Tips:**

✅ Copy-paste કરવું (Type ન કરવું)
✅ Username તમારું replace કરવું
✅ Internet connection on રાખવું
✅ Terminal window close ન કરવું

---

## ❓ **Hostinger Terminal લોકેશન Confusion?**

**Try આ میں ithis order:**

1. Dashboard → Advanced → Terminal ✓
2. Dashboard → Tools → Terminal ✓
3. Dashboard → Console ✓
4. Dashboard → Account → Terminal ✓

**એક ન એક મળશે!**

---

## 🎬 **Done થૈ તો બતાવ:**

```
✅ Terminal open
✅ Commands run
✅ npm install done
✅ npm start working
✅ "OCR Server running..." દેખાયું

Ready? Go! 🚀
```

---

**Terminal Commands થઈ ગયાં તો બતાવ!** 👍
