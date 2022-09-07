import React from 'react'
import "./FooterMain.css";
import FooterMedia from './FooterMedia';

function FooterMain() {
  return (
<div className='footer-main-container'>

  <div className='footer-main'>

    <div className='footer-cars-sec1'>
      <h5 className='footer-cars'>CARS</h5>
      <p><a href='#!' className='footer-cars-btns'>How to Buy</a></p>
      <p><a href='#!' className='footer-cars-btns'>Sell Your Car</a></p>
      <p><a href='#!' className='footer-cars-btns'>Finance</a></p>
      <p><a href='#!' className='footer-cars-btns'>Insurance</a></p>
      <p><a href='#!' className='footer-cars-btns'>Auctions & Events</a></p>
      <p><a href='#!' className='footer-cars-btns'>Buyers & Sellers Fees</a></p>
      <p><a href='#!' className='footer-cars-btns'>Vehicel Sale Price History Tool</a></p>
      <p><a href='#!' className='footer-cars-btns'>Shipping costs</a></p>
    </div>

    <div className='footers-fin-sec2'>
      <h5 className='footer-fin'>FINANCE</h5>
      <p><a href='#!' className='footer-fin-btns'>Finance Home Page</a></p>
      <p><a href='#!' className='footer-fin-btns'>Car & Personal Finance</a></p>
      <p><a href='#!' className='footer-fin-btns'>Loan Calculator</a></p>
      <p><a href='#!' className='footer-fin-btns'>Truck Finance</a></p>
      <p><a href='#!' className='footer-fin-btns'>Finance Information</a></p>
    </div>

    <div className='footer-Insu-sec3'>
      <h5 className='footer-Insu'>INSURANCE</h5>
      <p><a href='#!' className='footer-Insu-btns'>Car Insuarnce Option</a></p>
      <p><a href='#!' className='footer-Insu-btns'>Get a Quote</a></p>
      <p><a href='#!' className='footer-Insu-btns'>Retrive a Quote</a></p>
      <p><a href='#!' className='footer-Insu-btns'>FAQs</a></p>
      <p><a href='#!' className='footer-Insu-btns'>General Insuarnce</a></p>
    </div>

    <div className='footer-search-sec4'>
        <h5 className='footer-search'>SEARCH FOR</h5>
        <p><a href='#!' className='footer-Srch-btn'>Cars</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Trucks & Machinery</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Damaged & end of Life Cars</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Boats & Marine</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Mototcycles & Scooters</a></p>
        <p><a href='#!' className='footer-Srch-btn'>General Goods</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Buses, Caravans & Motorhomes</a></p>
        <p><a href='#!' className='footer-Srch-btn'>Turners Auction Schedule</a></p>
    </div>

    <div className='footer-AbtUs-sec5'>
       <h5 className='footer-AbtUs'>ABOUT US</h5>
       <p><a href='#!' className='footer-AbtUs-btn'>Overview</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Turners Careers</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Terms and Conditions</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Privacy Policy</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Turners Live</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>The Good Oil Blog</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Email Alerts</a></p>
       <p><a href='#!' className='footer-AbtUs-btn'>Contact Us</a></p>
    </div>

    </div>

    <div>
      <FooterMedia/>
    </div>
</div>

  )
}

export default FooterMain;