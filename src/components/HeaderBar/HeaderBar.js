import React from 'react'
import BlueNavBar from './BlueNavBar'
import LogoBar from './LogoBar'
import TopNavBar from './TopNavBar'

const HeaderBar = () => {
  return (
    <div className='header-bar-container'>
    <TopNavBar></TopNavBar>
    <LogoBar></LogoBar>
    <BlueNavBar></BlueNavBar>
    </div>
  )
}

export default HeaderBar
