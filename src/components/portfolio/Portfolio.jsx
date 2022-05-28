import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
// import IMG2 from '../../assets/tetris2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3>Excercise Tracker</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/ExUp' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3>JavaScript Tetris</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/MattTetris' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3> JS SelfDrivingCar(inProgress)</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/Self-Driving-Car' className='btn' target='_blank'>Github</a>
            <a href='https://mscalzi-self-driving-car-demo.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3>Car Tracker</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/ExUp' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3>Poop Tracker</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/ExUp' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='stock photo' />
          </div>
          <h3>Loop Tracker</h3>
          <div className="portfolio__item-cte">
            <a href='https://github.com/Mscalzi/ExUp' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article> */}

      </div>

    </section>
  )
}

export default Portfolio