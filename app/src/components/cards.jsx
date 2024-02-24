import React from 'react';
import '../Pages/Homepage.css';

const Cards = () => {
  return (
    <div className="card-scroll-container">
      <div className="card-container">
        <div className="card card1">
          <img src="image1.jpg" alt="Image 1" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Title 1</h2>
            <p className="card-text">Content for card 1 goes here.</p>
          </div>
        </div>
        <div className="card card2">
          <img src="image2.jpg" alt="Image 2" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Title 2</h2>
            <p className="card-text">Content for card 2 goes here.</p>
          </div>
        </div>
        <div className="card card3">
          <img src="image3.jpg" alt="Image 3" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Title 3</h2>
            <p className="card-text">Content for card 3 goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
