import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>scalzi.matthew11@gmail.com</h5>
            <a href="mailto:scalzi.matthew11@gmail.com" target='_blank'>Send A Message</a>
          </article>

           <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Matthew Scalzi</h5>
            <a href="https://www.linkedin.com/in/matthew-scalzi-25597a239/" target='_blank'>Connect With Me</a>
          </article>

          <article className="contact__option">
            <AiFillGithub className='contact__option-icon' />
            <h4>Git Hub</h4>
            <h5>Matthew Scalzi</h5>
            <a href="https://github.com/Mscalzi" target='_blank'>See My Work</a>
          </article>

        </div>
        {/* end of contact sect */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button href='mailto:scalzi.matthew11@gmail.com' type='submit' className='btn btn-primary btn-ra'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact