import React from 'react'
import './Marquee.css'
import mario from "../../assets/walkingmario.gif"


const Marquee = () => {
    return (
      <div className="marquee-container">
        <img src={mario} alt="Marquee GIF" className="marquee-gif" />
      </div>
    );
  };
  
  export default Marquee;