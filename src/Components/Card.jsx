import React from 'react'
import "./Card.css"

function Card({image}) {
  return (
    <div className='poster'>
        <img  src={image} alt="" />
    </div>
  )
}

export default Card