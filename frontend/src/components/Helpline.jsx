import React from 'react';
import '../styles/Helpline.scss'; // Import the CSS
import helplineData from '../helpline.json'; // Import JSON data

const Helpline = () => {
  return (
    <div className="helpline-container">
      <h1 className="title">Helpline Information</h1>
      <div className="card-container">
        {helplineData.map((helpline, index) => (
          <div key={index} className="helpline-card">
            <h3 className="issue">{helpline.issue || '-'}</h3>
            <p><strong>Helpline Number:</strong> {helpline.helpline || '-'}</p>
            <p>
              <strong>Website:</strong>{' '}
              {helpline.website ? (
                <a href={helpline.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              ) : (
                '-'
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helpline;
