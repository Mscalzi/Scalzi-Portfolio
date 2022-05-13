import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  href="https://www.linkedin.com/in/matthew-scalzi-25597a239" target='blank'><AiFillLinkedin /></a>
        <a  href="https://github.com/Mscalzi" target='blank'><AiFillGithub /></a>
    </div>
  )
}

export default HeaderSocials