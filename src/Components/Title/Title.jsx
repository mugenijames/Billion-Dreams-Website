import React from 'react'
import './Title.css'

const Title = ({ subTitle }) => {
  return (
    <div className='title'>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default Title;
