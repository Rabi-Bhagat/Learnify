import React from 'react';

const TutorialCard = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ff69b4', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Tutorial</button> {/* Mock video embed would go here */}
    </div>
  );
};

export default TutorialCard;