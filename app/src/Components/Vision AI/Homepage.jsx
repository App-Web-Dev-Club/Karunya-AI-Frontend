import React from 'react';
import './Homepage.css'; 
import { BsTelephone } from "react-icons/bs";

function Navbar() {
  return (
    <div className='body'>
    <div className="navbar">
      <div className="nav-title">
        <p>Karunya <b>AI</b></p>
      </div>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Chapter</a>
        <a href="#">FAQ</a>
      </div>
    </div>
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
        <div className='wc-button'>
            <button className='wc-join'>
                Join
            </button>
        </div>
        <div className='wc-contact'>
        <BsTelephone className="telephone"/>
            Contact Us
        </div>



    </div>
    </div>
);
}

export default Navbar;
