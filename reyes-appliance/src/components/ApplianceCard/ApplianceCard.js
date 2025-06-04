import React from 'react';
import './index.css';

/**
 * ApplianceCard component displays information about a single appliance repair service
 * 
 * @param {Object} props - Component props
 * @param {string} props.image - Path to appliance image
 * @param {string} props.title - Appliance type title
 * @param {string} props.content - Description text for the appliance service
 * @returns {JSX.Element} - Rendered card component
 */
const ApplianceCard = ({ image, title, content }) => {
  return (
    <div className="appliance-card">
      <div className="appliance-content">
        <img 
          src={image} 
          alt={title} 
          className="appliance-icon"
        />
        <h3 className="appliance-title">{title}</h3>
        <p className="appliance-description">{content}</p>
      </div>
    </div>
  );
};

export default ApplianceCard;