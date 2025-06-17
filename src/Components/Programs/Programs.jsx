import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Program_1.jpeg'
import program_2 from '../../assets/Program_2.jpeg'
import program_3 from '../../assets/Program_3.jpeg'
import Web from '../../assets/programming.png'
import java from '../../assets/java-brands.svg'
import data from '../../assets/chart-pie-solid.svg'
const Programs = () => {
  return (
    <div className='Programs container' id='program'>
        <div className='title'>
            <h1>OUR PROGRAM </h1>
            <h2>What We Offer</h2>
        </div>
        <div className='courses'>
        <div className='Program'>
            <img className='course' src={program_1} alt="" />
            <div className='caption'>
                <img src={Web} alt="" />
                <p>Web Development</p>
            </div>
        </div>
        <div className='Program'>
            <img className='course' src={program_2} alt="" />
            <div className='caption'>
                <img src={data} alt="" />
                <p>Data Science & Analytics</p>
            </div>
        </div>
        <div className='Program'>
            <img className='course' src={program_3} alt="" />
            <div className='caption'>
                <img src={java} alt="" />
                <p>Software Development with Java</p>
            </div>
        </div>   
        </div>
    </div>
  )
}

export default Programs