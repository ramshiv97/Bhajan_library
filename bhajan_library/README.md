# Bhajan Library

A Progressive Web App (PWA) for accessing bhajan PDFs on mobile and desktop.

## 📁 Project Structure

```
bhajan-library/
  index.html          # Main HTML file
  style.css           # Styling
  app.js              # JavaScript logic
  manifest.json       # PWA manifest
  sw.js               # Service worker for offline support
  icons/              # App icons folder
    icon-192.png      # 192x192 icon (add this)
    icon-512.png      # 512x512 icon (add this)
  pdfs/               # PDF files folder
    (your PDFs here)
```

## 🚀 Next Steps

1. **Add Icons** (icons folder):
   - Create `icon-192.png` (192x192 pixels)
   - Create `icon-512.png` (512x512 pixels)
   - Use a PWA icon generator online or create custom icons

2. **Add PDFs** (pdfs folder):
   - Copy your bhajan PDFs into the `pdfs/` folder
   - Rename them with lowercase and hyphens (e.g., `hanuman-chalisa.pdf`)

3. **Update Bhajan List** (app.js):
   - Edit `app.js` and add entries to the `BHAJANS` array:
   ```javascript
   { title: "Your Bhajan Name", file: "your-file-name.pdf" },
   ```

4. **Deploy to GitHub Pages**:
   - Create a GitHub repository
   - Upload all files
   - Enable GitHub Pages in Settings → Pages
   - Set source to `main` branch, `/(root)` folder
   - Access your app at: `https://yourusername.github.io/bhajan-library/`

5. **Install on Mobile**:
   - **Android**: Open in Chrome → Menu → "Add to Home screen"
   - **iOS**: Open in Safari → Share → "Add to Home Screen"

## 📝 Adding New Bhajans

1. Upload the PDF to `pdfs/` folder
2. Add an entry in `app.js`:
   ```javascript
   { title: "New Bhajan", file: "new-bhajan.pdf" },
   ```
3. Commit and push changes

## 🎨 Features

- ✅ Search functionality
- ✅ Mobile-friendly design
- ✅ Installable as app
- ✅ Works offline (after first visit)
- ✅ Dark theme optimized for readability
