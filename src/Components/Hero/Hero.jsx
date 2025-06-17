import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>Empowering Your Future Through Technology</h1>
            <p>Gain in-demand tech skills through industry-aligned training in programming, software development, and data science. Learn by doing with hands-on projects designed to make you job-ready from day one.
            </p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
            
        </div>
    </div>
  )
}
export default Hero