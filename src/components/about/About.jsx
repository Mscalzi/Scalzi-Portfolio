import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import { GiAwareness } from 'react-icons/gi'
import { HiOutlineUsers } from 'react-icons/hi'
import { AiOutlineFolderView } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>ME</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiAwareness className='about__icon' />
              <div className='card__div'>
                <h4>Experience</h4>
                <small>1.5 Years</small>
              </div>
              
            </article>



            <article className='about__card'>
              <HiOutlineUsers className='about__icon' />
              <div className='card__div'>
                <h4>Clients</h4>
                <small>5 Satisfied</small>
              </div>

            </article>



            <article className='about__card'>
              <AiOutlineFolderView className='about__icon' />
              <div className='card__div'>
                <h4>Projects</h4>
                <small>30 Completed</small>
              </div>
            </article>
          </div>
          <p className='p__tag'>
            Well-qualified Full Stack Developer familiar with a wide range of programming utilities and
            languages. Knowledge of back-end and front-end development requirements. Handles any part of the
            development life-cycle process. Collaborative team player with excellent technical abilities
            offering 1.5 years of related experience.
          </p>
          <a href="#contact" id='Btn' className='btn btn-primary btn-r'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About