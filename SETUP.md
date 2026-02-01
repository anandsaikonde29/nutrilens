# 🚀 NutriLens - Quick Setup Guide

## ✅ Final Interface Checklist

All required interface components are implemented:

- ✅ **Green Gradient Header** - Beautiful gradient header with NutriLens branding
- ✅ **Upload and Analyze Section** - Image upload with camera/file options and AI analysis
- ✅ **AI-Simulated Nutrition Results** - Complete nutrition breakdown with circular visualization
- ✅ **Persistent Meal History** - localStorage-based meal tracking (up to 20 meals)
- ✅ **Motivational Footer** - Inspirational quote and company information

## 📦 Installation & Setup

### Step 1: Navigate to Project Directory

```bash
cd "/Users/akanksh/Documents/AAA Capstone all/Nutrilens"
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.8 (build tool)
- All required development dependencies

### Step 3: Start Development Server

```bash
npm run dev
```

The app will start and you'll see:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser

Navigate to: **http://localhost:5173**

## 🎯 Quick Start Guide

1. **Upload an Image**: Click "Camera" or "Choose File" to upload a food image
2. **Wait for Analysis**: Watch the AI spinner (2-second simulation)
3. **View Results**: See nutrition breakdown, circular chart, and health tips
4. **Re-Analyze**: Click "🔄 Re-Analyze" to get different results
5. **Check History**: Scroll down to see your meal history
6. **Select Previous Meal**: Click any meal card to view its analysis

## 🏗️ Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Features Overview

### Core Features
- **Image Upload**: Camera capture or file selection
- **AI Analysis**: Simulated 2-second processing with loading animation
- **Nutrition Display**: Calories, protein, carbs, fats with progress bars
- **Circular Chart**: Visual macronutrient ratio breakdown
- **Health Tips**: AI-generated personalized recommendations
- **Re-Analyze**: Get different analysis results
- **Meal History**: Persistent storage with thumbnails
- **Responsive Design**: Works on mobile, tablet, and desktop

### Technical Stack
- **React 18** with Hooks (useState, useEffect)
- **Vite** for fast development and building
- **localStorage** for data persistence
- **CSS3** with animations and gradients
- **SVG** for circular nutrient visualization

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Browser Cache
If you see old code, clear your browser cache or use incognito mode.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎓 Learning Resources

The codebase includes comprehensive comments explaining:
- React hooks usage
- AI simulation logic
- localStorage implementation
- Component lifecycle
- CSS animations

---

**Ready to analyze your meals! 🥗**

For detailed documentation, see `README.md`




