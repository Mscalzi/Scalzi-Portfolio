import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
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
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>MatthewScalzi@messenger</h5>
            <a href="#" target='_blank'>Send A Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>matthewscalzi@Instagram</h5>
            <a href="#" target='_blank'>Send A Message</a>
          </article>

        </div>
        {/* end of contact sect */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact