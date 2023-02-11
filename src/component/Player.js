import React from 'react'
import Footer from './footer'
// import LeftSide from './leftside'
import Header from './header'
import '../style/Player.css'
import SideBar from './sidebar'
import Lysic from './lysic'
function Player() {
  return (
    <div className='Player'>
      <div className='Player__body'>
            <SideBar/>
            <div  className='body'>
                  <Header/>
                  <Lysic/>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Player
