import React from 'react';
import './Homepage.css';
import Navbar from '../components/NavigationBar'; 


function Homepage() {
  return (
    <div className='body'>
    <Navbar/>
    <div className='welcome-container'>
        <div className='wc-top'>
            • Welcome to the AI Era
        </div>
        <div className='wc-title'>
            <h1>Lorem Ipsum Dolor</h1>
        </div>
        <div className='wc-text'>
            Education,Research and Open-source
        </div>
        <div className='wc-button-container'>
          <div className='wc-button'>
            <button className='wc-join'>
              <b>Join</b>
            </button>
          </div>
          <div className='wc-contact'>
            Contact Us
          </div>
        </div>

    </div>
    </div>
);
}

export default Homepage;
