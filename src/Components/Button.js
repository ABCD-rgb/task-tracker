import React from 'react'

const Button = ({text, onClick, color}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button