import React from 'react'
import './header.css'
import Cta from './Cta'
import me from '../../assets/me4.png'
import HeaderSocials from './HeaderSocials'
import {HiChevronDoubleRight} from 'react-icons/hi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Matthew L. Scalzi</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className='me'>
          <img className='me' src={me} alt='me'></img>
        </div>
        {/* <a href="#contact" className='scroll__down'>Scroll Down<HiChevronDoubleRight className='arrow' /></a> */}
      </div>
    </header>
  )
}

export default Header