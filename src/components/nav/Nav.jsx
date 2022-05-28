import React from 'react'
import './nav.css'
// if hot done add hover text to icons!!!!!!!!!!!!!!!!!!!!!!!!!!!
import {AiOutlineHome} from 'react-icons/ai'
import {CgUserList} from 'react-icons/cg'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessage} from 'react-icons/bi'

//react hooks!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import {useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><CgUserList /></a>
      {/* <a href='#services' onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#services' ? 'active' : ''}><RiServiceLine /></a> */}
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessage /></a>
    </nav>
  )
}

export default Nav