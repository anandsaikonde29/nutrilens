import React, { useRef, useState } from 'react';
import './UploadPanel.css';

/**
 * UploadPanel Component
 * Handles image upload via file input or camera capture
 * Uses React hooks (useRef, useState) for file handling and preview
 */
const UploadPanel = ({ onImageUpload, isAnalyzing }) => {
  // Ref for hidden file input element
  const fileInputRef = useRef(null);
  // State for image preview display
  const [preview, setPreview] = useState(null);

  /**
   * Handles file selection and triggers image preview
   * Validates file type and creates preview using FileReader API
   */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      // Trigger AI analysis simulation
      onImageUpload(file);
    }
  };

  /**
   * Opens file picker dialog
   */
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  /**
   * Opens camera capture interface (mobile-friendly)
   * Sets capture attribute to use device camera
   */
  const handleCameraClick = () => {
    fileInputRef.current?.setAttribute('capture', 'environment');
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-panel">
      <div className="upload-card">
        <h2 className="upload-title">📸 Upload Your Meal</h2>
        <p className="upload-instructions">
          Capture or upload a photo of your meal to get instant AI-powered nutrition analysis
        </p>
        
        <div className="upload-actions">
          <button
            className="upload-btn camera-btn"
            onClick={handleCameraClick}
            disabled={isAnalyzing}
          >
            📷 Camera
          </button>
          <button
            className="upload-btn file-btn"
            onClick={handleClick}
            disabled={isAnalyzing}
          >
            📁 Choose File
          </button>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        
        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Meal preview" className="preview-image" />
          </div>
        )}
        
        {!preview && (
          <div className="upload-placeholder">
            <div className="placeholder-icon">🍽️</div>
            <p>No image selected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPanel;

