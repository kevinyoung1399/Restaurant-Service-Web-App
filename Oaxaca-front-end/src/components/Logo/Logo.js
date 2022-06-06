import React from "react";
import Tilt from 'react-tilt'
import './Logo.css';

/**
 * The logo component that displays the logo on the welcome screen
 * @author Hyungdon Um
 */
const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 400 }}>
        <div className="Tilt-inner"> <img src="https://i.imgur.com/BB5sl1j.png" alt ='logo'/></div>
      </Tilt>
    </div>
  );
}

export default Logo;