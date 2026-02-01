import React from 'react';
import './AnalysisPanel.css';

/**
 * AnalysisPanel Component
 * Displays AI-powered nutrition analysis results with circular visualization
 * Shows loading state during AI processing simulation
 */
const AnalysisPanel = ({ analysis, isAnalyzing, onReAnalyze, imageFile }) => {
  // Show loading spinner during AI analysis simulation
  if (isAnalyzing) {
    return (
      <div className="analysis-panel">
        <div className="analysis-card">
          <div className="analyzing-container">
            <div className="analyzing-spinner"></div>
            <h3 className="analyzing-text">AI Analyzing Image...</h3>
            <p className="analyzing-subtext">Detecting food items and calculating nutrition</p>
          </div>
        </div>
      </div>
    );
  }

  // Don't render if no analysis data available
  if (!analysis) {
    return null;
  }

  // Extract nutrition data from analysis
  const { mealName, calories, protein, carbs, fats, healthTip } = analysis;
  const totalMacros = protein + carbs + fats;
  
  // Calculate percentages for visualization
  const proteinPercent = (protein / totalMacros) * 100;
  const carbsPercent = (carbs / totalMacros) * 100;
  const fatsPercent = (fats / totalMacros) * 100;

  // Calculate angles for circular chart (360 degrees total)
  const proteinAngle = (proteinPercent / 100) * 360;
  const carbsAngle = (carbsPercent / 100) * 360;
  const fatsAngle = (fatsPercent / 100) * 360;

  // Calculate stroke-dasharray for each segment
  const circumference = 2 * Math.PI * 45; // radius = 45
  const proteinDash = (proteinPercent / 100) * circumference;
  const carbsDash = (carbsPercent / 100) * circumference;
  const fatsDash = (fatsPercent / 100) * circumference;

  // Calculate starting offsets for each segment
  const carbsOffset = proteinDash;
  const fatsOffset = proteinDash + carbsDash;

  return (
    <div className="analysis-panel">
      <div className="analysis-card fade-in">
        <div className="analysis-header">
          <h2 className="analysis-title">🍎 Nutrition Analysis</h2>
          {imageFile && onReAnalyze && (
            <button className="re-analyze-btn" onClick={() => onReAnalyze(imageFile)}>
              🔄 Re-Analyze
            </button>
          )}
        </div>
        
        {/* Meal name detected by AI */}
        <div className="meal-name">
          <span className="meal-label">Detected Meal:</span>
          <span className="meal-value">{mealName}</span>
        </div>

        {/* Calories display */}
        <div className="calories-display">
          <div className="calories-value">{calories}</div>
          <div className="calories-label">Calories</div>
        </div>

        {/* Circular nutrient ratio visualization */}
        <div className="circular-chart-section">
          <h3 className="macros-title">Macronutrient Ratio</h3>
          <div className="circular-chart-container">
            <svg className="circular-chart" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                className="chart-background"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e9ecef"
                strokeWidth="8"
              />
              {/* Protein segment */}
              <circle
                className="chart-segment protein-segment"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ff6b6b"
                strokeWidth="8"
                strokeDasharray={`${proteinDash} ${circumference}`}
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              {/* Carbs segment */}
              <circle
                className="chart-segment carbs-segment"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4ecdc4"
                strokeWidth="8"
                strokeDasharray={`${carbsDash} ${circumference}`}
                strokeDashoffset={-carbsOffset}
                transform="rotate(-90 50 50)"
              />
              {/* Fats segment */}
              <circle
                className="chart-segment fats-segment"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#feca57"
                strokeWidth="8"
                strokeDasharray={`${fatsDash} ${circumference}`}
                strokeDashoffset={-fatsOffset}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color protein-color"></span>
                <span className="legend-text">Protein {proteinPercent.toFixed(1)}%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color carbs-color"></span>
                <span className="legend-text">Carbs {carbsPercent.toFixed(1)}%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color fats-color"></span>
                <span className="legend-text">Fats {fatsPercent.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed macronutrient breakdown with progress bars */}
        <div className="macros-section">
          <h3 className="macros-title">Macronutrient Breakdown</h3>
          
          <div className="macro-item">
            <div className="macro-header">
              <span className="macro-name">🥩 Protein</span>
              <span className="macro-value">{protein}g</span>
            </div>
            <div className="macro-bar-container">
              <div 
                className="macro-bar protein-bar"
                style={{ width: `${proteinPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="macro-item">
            <div className="macro-header">
              <span className="macro-name">🍞 Carbohydrates</span>
              <span className="macro-value">{carbs}g</span>
            </div>
            <div className="macro-bar-container">
              <div 
                className="macro-bar carbs-bar"
                style={{ width: `${carbsPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="macro-item">
            <div className="macro-header">
              <span className="macro-name">🥑 Fats</span>
              <span className="macro-value">{fats}g</span>
            </div>
            <div className="macro-bar-container">
              <div 
                className="macro-bar fats-bar"
                style={{ width: `${fatsPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* AI-generated health recommendation */}
        <div className="ai-tip-section">
          <div className="ai-tip-header">
            <span className="ai-icon">🤖</span>
            <span className="ai-label">AI Health Tip</span>
          </div>
          <p className="ai-tip-text">{healthTip}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;

