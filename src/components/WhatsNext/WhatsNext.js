import React from 'react'
import "./WhatsNext.css";
import carIcon from '../img/car-icon.png';
import chatIcon from '../img/chat-icon.png';
import callIcon from '../img/call-icon.png';
import { Link } from "react-router-dom";

const WhatsNext = () => {
  return (
    <>
    <div className="whats-next-container">
       <div className="whats-next-header-text"><h1>What's next?</h1></div>

       <div className="whats-next-icon-container">

       <Link className="whats-next-icon" to="/cars/insurance-quotes">
        <img src={carIcon} alt="car icon"></img>
        <p>Get a quote</p>
       </Link>

       <div className="whats-next-icon">
        <img src={chatIcon} alt="chat icon"></img>
        <p>Contact us</p>
       </div>

       <div className="whats-next-icon">
        <img src={callIcon} alt="call icon"></img>
        <p>Give us a call <span><br></br>0800 123 456</span></p>
       </div>

       </div>
      
    </div>
    </>
  )
}

export default WhatsNext
