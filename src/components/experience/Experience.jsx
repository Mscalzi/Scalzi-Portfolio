import React from 'react'
import './experience.css'
import { BsCheckCircle } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
     
      <h5>My Skills And</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__development">
          <h3>Development Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              
              <h4><BsCheckCircle /> HTML5</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle />  CSS3</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> REACT</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
            </article>
  
            <article className='experience__details'>
              
              <h4><BsCheckCircle /> AXIOS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> MONGO DB</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> jQUERY</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>

        <div className='experience__softskills'>
          <h3>Soft Skills</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> PUNCTUALITY</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> COACHABILITY</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> ACTIVE LISTENER</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> AVID LEARNER</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> COMMUNICATION</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> MOTIVATED</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> COURTEOUS</h4>
              <small className='text-light'>Skilled</small>
            </article>

            <article className='experience__details'>
              
              <h4><BsCheckCircle /> TEAM ORIENTED</h4>
              <small className='text-light'>Skilled</small>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience