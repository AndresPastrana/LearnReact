import React from 'react'

const GobackArrow = () => {
  const goBack = () => {
    window.history.back()
  }
  return (
    <div onClick={goBack}>Go Back</div>
  )
}

export default GobackArrow
