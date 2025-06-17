import React from 'react'
import './Gallery.css'
import photo_1 from '../../assets/gallery-1.jpeg'
import photo_2 from '../../assets/gallery-2.jpeg'
import photo_3 from '../../assets/gallery-3.jpeg'
import photo_4 from '../../assets/gallery-4.jpeg'
import arrow from '../../assets/white-arrow.png'
const Gallery = () => {
  return (
    <div className='main container' id="campus">
        <div className='gallery '>
        <div className='photos'>
            <img src={photo_1} alt="" />
        </div>
        <div className='photos'>
            <img src={photo_2} alt="" />
        </div>
        <div className='photos'>
            <img src={photo_3} alt="" />
        </div>
        <div className='photos'>
            <img src={photo_4} alt="" />
        </div>     
      </div>
      <div>
        <button className='btn btns'>See More Here <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Gallery