import React from 'react'
import CustomizedAccordions from './CustomizedAccordions'
import "./FaqBoxes.css";
import data from './data.json'
import data2 from './data2.json'

const FaqBoxes = () => {
  return (
    <>
    <div className="faq-boxes-container">
    <div className="faq-boxes">
        <h2>General Information</h2>
      <CustomizedAccordions data={data} ></CustomizedAccordions>
      <button className="faq-boxes-view-more">View More...</button>
    </div>

    <div className="faq-boxes">
        <h2>Payment</h2>
      <CustomizedAccordions data={data2} ></CustomizedAccordions>
      <button className="faq-boxes-view-more">View More...</button>
    </div>

    <div className="faq-boxes">
        <h2>Account and Login</h2>
      <CustomizedAccordions data={data2} ></CustomizedAccordions>
      <button className="faq-boxes-view-more">View More...</button>
    </div>

    <div  className="faq-boxes">
        <h2>Policy</h2>
      <CustomizedAccordions data={data} ></CustomizedAccordions>
      <button className="faq-boxes-view-more">View More...</button>
    </div>

    </div>
    </>
  )
}

export default FaqBoxes
