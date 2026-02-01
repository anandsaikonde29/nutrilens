# 🥗 NutriLens – AI Food Recognition & Nutrition Analyzer

A professional AI-powered React application that simulates computer vision-based meal analysis. Upload food images to get instant nutrition insights, macronutrient breakdowns, and AI-generated health recommendations.

## 🎯 Purpose

NutriLens demonstrates how AI-powered computer vision can revolutionize meal tracking and nutrition analysis. The app simulates a complete HealthTech platform that uses machine learning to:
- Recognize food items from images
- Estimate portion sizes and nutritional content
- Provide personalized health recommendations
- Track meal history for dietary insights

This project showcases the user experience and interface design for a real-world AI nutrition application, using simulated AI logic to demonstrate the concept.

## ✨ Key Features

- 📸 **Image Upload**: Capture or upload meal photos via camera or file selection
- 🤖 **AI Analysis**: Simulated AI-powered food recognition and nutrition estimation with loading animations
- 📊 **Nutrition Breakdown**: Detailed calorie and macronutrient (protein, carbs, fats) analysis
- ⭕ **Circular Visualization**: Interactive circular chart showing macronutrient ratios
- 🔄 **Re-Analyze**: Button to simulate different AI outcomes for the same image
- 💡 **Health Tips**: AI-generated personalized health recommendations based on macronutrient analysis
- 📚 **Meal History**: Persistent storage of analyzed meals with localStorage (up to 20 meals)
- 🎨 **Modern UI**: Beautiful, responsive design with smooth fade-in animations
- 📱 **Mobile-Friendly**: Fully responsive layout optimized for all devices
- ⚡ **React Hooks**: Uses useState and useEffect for state management and lifecycle

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Nutrilens/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with gradient design
│   │   ├── UploadPanel.jsx     # Image upload interface
│   │   ├── AnalysisPanel.jsx   # Nutrition analysis display
│   │   ├── MealHistory.jsx     # Previous meals history
│   │   └── Footer.jsx          # App footer
│   ├── utils/
│   │   └── aiAnalyzer.js       # Mock AI logic for food analysis
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.jsx                # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🧠 How It Works

### Mock AI Analysis

The app simulates an AI-powered food recognition system with the following steps:

1. **Image Preprocessing**: When a user uploads an image, the system simulates a 2-second AI analysis delay (simulating CNN inference time)
2. **Food Recognition**: Simulates computer vision model output by randomly selecting from 15 predefined meal names (e.g., "Grilled Chicken with Vegetables", "Pasta Alfredo")
3. **Nutrition Estimation**: Generates realistic nutrition values based on "detected" foods:
   - Calories: 250-700
   - Protein: 10-30g
   - Carbohydrates: 20-80g
   - Fats: 5-25g
4. **Macronutrient Analysis**: Calculates ratios and determines dominant macronutrient
5. **Health Recommendations**: Provides contextual tips based on macronutrient ratios (high protein, high carbs, high fat, or balanced)

### Circular Nutrient Visualization

The app includes an interactive circular chart (SVG-based) that visually represents macronutrient ratios:
- Each macronutrient (protein, carbs, fats) is represented by a colored segment
- The chart provides an intuitive visual breakdown of the meal's composition
- Includes a legend showing percentage breakdown

### Re-Analyze Feature

The "Re-Analyze" button allows users to:
- Re-run the AI analysis on the same image
- Get different results (simulating AI model variation)
- Compare multiple analysis outcomes

### Data Persistence

- All analyzed meals are saved to `localStorage`
- Meal history persists across browser sessions
- Maximum of 20 meals stored (oldest removed when limit reached)

## 🎨 Design Features

- **Color Scheme**: Fresh green tones (#6BCB77, #4CAF50) with soft neutrals
- **Typography**: Inter and Poppins fonts from Google Fonts
- **Layout**: Card-based design with drop shadows
- **Animations**: Smooth fade-in effects and loading spinners
- **Icons**: Emoji-based icons for visual appeal

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with gradients and animations
- **localStorage**: Client-side data persistence

## 📝 License

© 2025 NutriLens Inc. | AI-Powered Nutrition Insights.

---

*"Every bite counts toward a smarter you."*

