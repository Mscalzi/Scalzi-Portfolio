import React from 'react'
import './footer.css'
// import {AiOutlineInstagram} from 'react-icons/ai'
// import {BsFacebook} from 'react-icons/bs'
// import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      {/* <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><BsFacebook /></a>
        <a href="https://instagram.com" target='_blank'><AiOutlineInstagram /></a>
        <a href="https://twitter.com" target='_blank'><AiFillTwitterCircle /></a>
      </div> */}
      <div className='footer__copyright'>
      <small>&copy; Matthew Scalzi All rights reserved</small>
      </div>
      

    </footer>
  )
}

export default Footer