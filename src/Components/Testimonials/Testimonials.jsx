import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
  const slider=useRef();
  let tx=0;
  const slideForward=()=>{ 
    console.log("forward");
    if(tx>-50){
      tx-=25;
      console.log("-50");
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }  
  const slideBackward=()=>{
    console.log("Backward");
    if(tx<0){
      tx+=25;
      console.log("0");
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }
return (
    <div className='container testimonials'>
      <img className='nextBtn' src={next} alt="" onClick={slideForward}/>
      <img className='backBtn' src={back} alt="" onClick={slideBackward} />
      <div className='slider'> 
        <ul ref={slider}>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_4} alt="" />
                    <div className='user_details' >
                      <h1>Thiyagu S</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute of Computer Excellence provides high-quality, practical tech training.
                          The instructors are knowledgeable and supportive throughout the learning journey.
                          Modern labs and real-time projects help us gain valuable hands-on experience.
                          I'm proud to be part of an institute that genuinely empowers future tech professionals.</p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_2} alt="" />
                    <div className='user_details' >
                      <h1>Aditiya Dharshan</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>The learning environment at Rajam Institute is both friendly and professional.
                          They focus on real-world applications, not just theory.
                          Workshops and mini-projects keep us engaged and industry-ready.
                          I feel more confident in my technical skills thanks to this institute.
                      </p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_1} alt="" />
                    <div className='user_details' >
                      <h1>Pavitha S</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute offers structured and updated courses in line with industry needs.
                          The staff is approachable and always ready to help with doubts.
                          Their project-based teaching method helped me build a strong portfolio.
                          It’s a great place to start your career in tech with a solid foundation.
                      </p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_3} alt="" />
                    <div className='user_details' >
                      <h1>Vaishnavi S</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>I had a great learning experience at Rajam Institute of Computer Excellence.
                          They emphasize skill development through practical sessions and live demos.
                          The course content is clear, beginner-friendly, and job-oriented.
                          Overall, it's a reliable and student-focused place to learn technology.</p>
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials