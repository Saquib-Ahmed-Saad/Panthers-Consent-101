import React from 'react';
import './ProgressBar.css';

function ProgressBar({ current, total }) {
  const percent = ((current + 1) / total) * 100;
  // Fade out label when full
  const labelStyle = {
    color: '#1976d2',
    opacity: percent >= 100 ? 0 : 1,
    transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1)'
  };
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
      <span className="progress-label" style={labelStyle}>{current + 1} / {total}</span>
    </div>
  );
}

export default ProgressBar;
