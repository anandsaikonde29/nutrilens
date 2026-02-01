import React, { useState } from 'react';
import Header from './components/Header';
import UploadPanel from './components/UploadPanel';
import AnalysisPanel from './components/AnalysisPanel';
import MealHistory from './components/MealHistory';
import Footer from './components/Footer';
import { analyzeFoodImage, saveMealToHistory } from './utils/aiAnalyzer';
import './App.css';

/**
 * Main App Component
 * Manages state for image upload, AI analysis, and meal history
 * Uses React hooks (useState) for state management
 */
function App() {
  // State management using React hooks
  const [currentAnalysis, setCurrentAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [historyKey, setHistoryKey] = useState(0);
  const [currentImageFile, setCurrentImageFile] = useState(null);

  /**
   * Handles image upload and triggers AI analysis simulation
   * @param {File} imageFile - The uploaded image file
   */
  const handleImageUpload = async (imageFile) => {
    setCurrentImageFile(imageFile);
    setIsAnalyzing(true);
    setCurrentAnalysis(null);

    try {
      // Simulate AI-powered food recognition and nutrition analysis
      const analysis = await analyzeFoodImage(imageFile);
      setCurrentAnalysis(analysis);
      // Save to localStorage for meal history persistence
      saveMealToHistory(analysis);
      // Force MealHistory component to reload
      setHistoryKey(prev => prev + 1);
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Failed to analyze image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  /**
   * Handles re-analysis of the current image
   * Simulates different AI outcomes by re-running analysis
   * @param {File} imageFile - The image file to re-analyze
   */
  const handleReAnalyze = async (imageFile) => {
    setIsAnalyzing(true);
    setCurrentAnalysis(null);

    try {
      // Re-analyze with potentially different results (simulated AI variation)
      const analysis = await analyzeFoodImage(imageFile);
      setCurrentAnalysis(analysis);
      // Save new analysis to history
      saveMealToHistory(analysis);
      setHistoryKey(prev => prev + 1);
    } catch (error) {
      console.error('Error re-analyzing image:', error);
      alert('Failed to re-analyze image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  /**
   * Handles selection of a meal from history
   * Displays the selected meal's analysis
   * @param {Object} meal - The meal analysis object from history
   */
  const handleSelectMeal = (meal) => {
    setCurrentAnalysis(meal);
    // Smooth scroll to top to show analysis
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <UploadPanel onImageUpload={handleImageUpload} isAnalyzing={isAnalyzing} />
        <AnalysisPanel 
          analysis={currentAnalysis} 
          isAnalyzing={isAnalyzing}
          onReAnalyze={handleReAnalyze}
          imageFile={currentImageFile}
        />
        <MealHistory key={historyKey} onSelectMeal={handleSelectMeal} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

