import React from 'react'
import HeaderBar from '../components/HeaderBar/HeaderBar'
import FooterMain from '../components/FooterMain'
import SearchBar from '../components/SearchBar/SearchBar'
import FaqBoxes from '../components/FaqBoxes/FaqBoxes'
import WhatsNext from '../components/WhatsNext/WhatsNext'


const FaqPage = () => {
  return (
    <>
     <HeaderBar></HeaderBar>
     <SearchBar/>
     <FaqBoxes/>
     <WhatsNext/>
     <FooterMain></FooterMain>
    </>
  )
}

export default FaqPage
