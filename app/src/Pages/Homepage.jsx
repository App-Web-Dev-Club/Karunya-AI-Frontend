import React from 'react';
import './Homepage.css';
import Navbar from '../components/NavigationBar'; 
import { FiPhone } from "react-icons/fi";

function Homepage() {
  return (
    <div className='body'>
    <Navbar/>
    <div className='welcome-container'>
        <div className='wc-top'>
            • Welcome to the AI Era
        </div>
        <div className='wc-title glitch-text' data-text="Karunya AI" title='Karunya AI'>
          <h1>Karunya AI</h1>
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
            <a href="mailto:your-email@example.com" className='contact-link'>
              <div className='phone-img'>
                <FiPhone />
              </div>
              Contact Us
            </a>
          </div>
        </div>
      

    </div>
    <div className='images'>
  <div className='images-column'>
    <img src='/src/assets/1img.png' alt='Image 1' />
    <img src='/src/assets/3img.png' alt='Image 3' />
  </div>
  <div className='images-column'>
    <img src='/src/assets/2img.png' alt='Image 2' />
    <img src='/src/assets/4img.png' alt='Image 4' />
  </div>
</div>
    </div>
);
}

export default Homepage;
