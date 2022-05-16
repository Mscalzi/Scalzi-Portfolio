import React from 'react'
import './header.css'
import Cta from './Cta'
// import me from '../../assets/me4.png'
import HeaderSocials from './HeaderSocials'
// import {HiChevronDoubleRight} from 'react-icons/hi'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Matthew L. Scalzi</h1>
        <h2 className="text-light">Full Stack Developer</h2>
        <Cta />
        <HeaderSocials />
        {/* <div className='me'>
          <img className='me' src={me} alt='me'></img>
        </div> */}
        {/* <a href="#contact" className='scroll__down'>Scroll Down<HiChevronDoubleRight className='arrow' /></a> */}
      </div>
    </header>
  )
}

export default Header