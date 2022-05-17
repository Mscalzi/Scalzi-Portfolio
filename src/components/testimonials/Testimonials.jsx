import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/client2.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import 'swiper/css/pagination';


const data = [
  {

    name: 'Someone Special',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur? Amet corporis doloribus laborum ipsum expedita incidunt repellatfugiat dignissimos iure rerum, aspernatur consectetur? Dolor similique ipsum cumque facilis eum.'
  },
  {

    name: 'Someone Exemplary',
    review: ' Lorem spernatur consectetur? Dolor similique ipsum cumque facilis eum eum heumd gtrewqasdrty lorem poopem doopem stoopem killin dosesr forunt vere grevere illin dillin stillin.'
  },
  {

    name: 'Someone Believable',
    review: ' adipisicing elit. Blanditiis, consectetur? Amet corporis doloribus laborum ipsum expedita incidunt repellatfugiat dignissimos iure rerum, aspernatur consectetur? Dolor similique ipsum cumque facilis eum.'
  },
  {

    name: 'A Prick',
    review: ' doloribus laborum ipsum expedita incidunt repellatfugiat dignissimos iure rerum, aspernatur consectetur? Dolor similique ipsum cumque facilis eum.'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Customer Reviews</h5>
      <h2>Testimonials</h2>
  
      <Swiper className="container testimonials__container">
        
        
        
        
        {
          data.map(({  name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='img__div'>
                  <img src={CLIENT1} alt='former clients' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials