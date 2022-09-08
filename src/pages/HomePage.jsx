import React from 'react'
import FooterMain from '../components/FooterMain'
import HeaderBar from '../components/HeaderBar/HeaderBar'
import HomePageImage from './img/HomePageImage.jpg'
import "./HomePage.css"

function HomePage() {
  return (
    <div>
        <header>
            <HeaderBar/>
        </header>

        <body className='body-img'>
            <img src={HomePageImage} alt="" className="home-image" />
        </body>


        <footer>
            <FooterMain/>
        </footer>

    </div>
  )
}

export default HomePage;