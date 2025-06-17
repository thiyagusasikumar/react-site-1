import React from 'react'
import './About.css'
import about from '../../assets/about.jpeg'
import play from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about container'>
        <div className='aboutLeft'>
            <img className='AboutImg' src={about} alt="" />
            <div className='play'>
            <img  src={play} alt="" />
            </div>
        </div>
        <div className='aboutRight'>
            <h3>ABOUT US</h3>
            <h1>Empowering Future Innovators Today</h1>
            <p>At Rajam Computer Education, we empower students with practical, 
            industry-ready tech skills through hands-on training and expert guidance. Our vision is to become a leading hub for computer-based learning, shaping the next generation of tech professionals. We are committed to delivering accessible, high-quality training that bridges the gap between learning and real-world application. With modern computer labs, experienced instructors, and a project-based curriculum, we provide a supportive and tech-driven environment where students can thrive.</p>
        </div>
    </div>
  )
}

export default About