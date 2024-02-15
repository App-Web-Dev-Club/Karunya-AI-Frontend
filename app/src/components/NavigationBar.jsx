import React from "react";
import '../Pages/Homepage.css'

const Navbar = () => {
    return(
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

    )
}
export default Navbar;