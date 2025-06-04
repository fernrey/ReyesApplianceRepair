import React from 'react';
import './index.css';

/**
 * ServiceFeature component displays a single service advantage/feature
 * 
 * @param {Object} props - Component props
 * @param {string} props.image - Path to feature icon
 * @param {string} props.title - Feature title
 * @param {string} props.content - Description of the feature
 * @returns {JSX.Element} - Rendered feature card component
 */
const ServiceFeature = ({ image, title, content }) => {
  return (
    <div className="feature-card">
      <img 
        src={image} 
        alt={title} 
        className="feature-icon"
      />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{content}</p>
    </div>
  );
};

export default ServiceFeature;