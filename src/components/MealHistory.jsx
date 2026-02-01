import React, { useState, useEffect } from 'react';
import { getMealHistory, clearMealHistory } from '../utils/aiAnalyzer';
import './MealHistory.css';

/**
 * MealHistory Component
 * Displays previously analyzed meals from localStorage
 * Uses React hooks (useState, useEffect) for state and lifecycle management
 */
const MealHistory = ({ onSelectMeal }) => {
  // State to store meal history from localStorage
  const [history, setHistory] = useState([]);

  /**
   * useEffect hook: Load meal history from localStorage on component mount
   * Runs once when component is first rendered
   */
  useEffect(() => {
    loadHistory();
  }, []);

  /**
   * Loads meal history from localStorage
   * Retrieves persisted meal data saved after each analysis
   */
  const loadHistory = () => {
    const meals = getMealHistory();
    setHistory(meals);
  };

  /**
   * Clears all meal history from localStorage
   * Prompts user for confirmation before clearing
   */
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all meal history?')) {
      clearMealHistory();
      setHistory([]);
    }
  };

  if (history.length === 0) {
    return (
      <div className="meal-history">
        <div className="history-card">
          <h2 className="history-title">📊 Meal History</h2>
          <div className="empty-history">
            <div className="empty-icon">🍽️</div>
            <p>No meals analyzed yet. Upload your first meal to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="meal-history">
      <div className="history-card">
        <div className="history-header">
          <h2 className="history-title">📊 Meal History</h2>
          <button className="clear-btn" onClick={handleClear}>
            Clear All
          </button>
        </div>
        
        <div className="history-grid">
          {history.map((meal, index) => (
            <div
              key={index}
              className="history-item"
              onClick={() => onSelectMeal(meal)}
            >
              <div className="history-image-container">
                <img
                  src={meal.imageUrl}
                  alt={meal.mealName}
                  className="history-image"
                />
              </div>
              <div className="history-info">
                <h3 className="history-meal-name">{meal.mealName}</h3>
                <div className="history-stats">
                  <span className="history-calories">{meal.calories} cal</span>
                  <span className="history-macros">
                    P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fats}g
                  </span>
                </div>
                <div className="history-date">
                  {new Date(meal.timestamp).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealHistory;

