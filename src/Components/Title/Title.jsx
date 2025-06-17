import React from 'react'
import './Title.css'
const Title = ({subTitle,Titles}) => {
  return (
    <div className='title'>
        <h1>{subTitle}</h1>
        <h2>{Titles}</h2>

    </div>
  )
}

export default Title