/**
 * Mock AI Food Recognition & Nutrition Analyzer
 * Simulates computer vision-based food analysis using machine learning concepts
 * 
 * This module simulates:
 * 1. Image processing and food item detection
 * 2. Nutrition estimation based on detected foods
 * 3. Health recommendations based on macronutrient analysis
 */

// Predefined meal names that AI "recognizes" from images
// In a real system, this would come from a trained CNN model
const MEAL_NAMES = [
  "Grilled Chicken with Vegetables",
  "Pasta Alfredo",
  "Avocado Toast",
  "Caesar Salad with Grilled Chicken",
  "Beef Burger with Fries",
  "Sushi Platter",
  "Vegetable Stir Fry",
  "Greek Yogurt Bowl with Berries",
  "Grilled Salmon with Quinoa",
  "Margherita Pizza",
  "Chicken Burrito Bowl",
  "Eggs Benedict",
  "Ramen Bowl",
  "Fruit Smoothie Bowl",
  "Steak with Mashed Potatoes"
];

// AI-generated health tips based on macronutrient ratios
// Simulates personalized recommendations from nutrition AI
const HEALTH_TIPS = {
  highProtein: [
    "Excellent choice for muscle recovery!",
    "Great protein content to support your fitness goals.",
    "This meal provides quality protein for satiety."
  ],
  highCarbs: [
    "Consider reducing refined grains in your meal.",
    "Try pairing with more fiber-rich sides to balance this meal.",
    "This meal is carb-heavy - consider lighter options later."
  ],
  highFat: [
    "Consider balancing with lighter meals later in the day.",
    "This meal is rich in fats - great for energy, but watch portion size.",
    "Try adding more vegetables to balance the fat content."
  ],
  balanced: [
    "Well-balanced meal! Great nutritional profile.",
    "This meal provides a good mix of macronutrients.",
    "Excellent choice for maintaining a balanced diet."
  ]
};

/**
 * Simulates AI-powered food image analysis
 * 
 * AI Simulation Steps:
 * 1. Image preprocessing (simulated with delay)
 * 2. Food item detection using computer vision (randomized meal recognition)
 * 3. Portion size estimation (simulated with random values)
 * 4. Nutrition calculation based on detected foods
 * 5. Health recommendation generation based on macronutrient analysis
 * 
 * @param {File} imageFile - The uploaded food image
 * @returns {Promise<Object>} Analysis object with nutrition data
 */
export const analyzeFoodImage = (imageFile) => {
  return new Promise((resolve) => {
    // Step 1: Simulate AI processing delay (image preprocessing, CNN inference)
    setTimeout(() => {
      // Step 2: Generate realistic nutrition values based on "detected" foods
      // In a real system, these would come from a food database and portion estimation
      const calories = Math.floor(Math.random() * (700 - 250 + 1)) + 250;
      const protein = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      const carbs = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
      const fats = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
      
      // Step 3: Simulate food recognition (CNN model output)
      // Randomly selects from predefined meal names
      const mealName = MEAL_NAMES[Math.floor(Math.random() * MEAL_NAMES.length)];
      
      // Step 4: Analyze macronutrient ratios for health recommendations
      let tipCategory = 'balanced';
      const totalMacros = protein + carbs + fats;
      const proteinRatio = protein / totalMacros;
      const carbsRatio = carbs / totalMacros;
      const fatRatio = fats / totalMacros;
      
      // Determine recommendation category based on dominant macronutrient
      if (proteinRatio > 0.35) {
        tipCategory = 'highProtein';
      } else if (carbsRatio > 0.5) {
        tipCategory = 'highCarbs';
      } else if (fatRatio > 0.4) {
        tipCategory = 'highFat';
      }
      
      // Step 5: Generate personalized health tip
      const healthTip = HEALTH_TIPS[tipCategory][
        Math.floor(Math.random() * HEALTH_TIPS[tipCategory].length)
      ];
      
      // Compile analysis results
      const analysis = {
        mealName,
        calories,
        protein,
        carbs,
        fats,
        healthTip,
        timestamp: new Date().toISOString(),
        imageUrl: URL.createObjectURL(imageFile)
      };
      
      resolve(analysis);
    }, 2000); // 2 second delay simulates AI processing time
  });
};

/**
 * Saves analyzed meal to localStorage for persistence
 * Maintains a maximum of 20 meals (FIFO - oldest removed first)
 * 
 * @param {Object} analysis - The meal analysis object to save
 */
export const saveMealToHistory = (analysis) => {
  const history = getMealHistory();
  history.unshift(analysis);
  // Keep only last 20 meals to prevent localStorage overflow
  const limitedHistory = history.slice(0, 20);
  localStorage.setItem('nutrilens_history', JSON.stringify(limitedHistory));
};

/**
 * Retrieves meal history from localStorage
 * Returns empty array if no history exists
 * 
 * @returns {Array} Array of meal analysis objects
 */
export const getMealHistory = () => {
  const stored = localStorage.getItem('nutrilens_history');
  return stored ? JSON.parse(stored) : [];
};

/**
 * Clears all meal history from localStorage
 */
export const clearMealHistory = () => {
  localStorage.removeItem('nutrilens_history');
};

