import React from 'react'

const Button = ({onClick,Icon,...rest}) => {
  return (
    <button style={{
        border:"none",
    }} onClick={onClick} {...rest}>
        <Icon/>
    </button>
  )
}

export default Button