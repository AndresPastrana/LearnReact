/* eslint-disable react/prop-types */
import React from 'react'
import { NAVIGATION } from '../const'
const Link = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    const trigerByRightClick = (e.button === 0) // We need to know what trigers the event
    const modifiedByKey = e.metaKey || e.shiftKey || e.altKey || e.ctrlKey

    // We only handle the beahvior of the link when the user's action is a simple rigth click
    // Otherwise we delagate in the browse
    if (trigerByRightClick && !modifiedByKey) {
      e.preventDefault()
      window.history.pushState({}, '', to) // Change the url without refreshing
      const PUSHSTATE = new Event(NAVIGATION.PUSHSTATE)
      window.dispatchEvent(PUSHSTATE)
    }
  }
  return (

    <a {...props} href={to} style={{
      textDecoration: 'none',
      display: 'inline-block',
      padding: '5px'
    }} onClick={handleClick}>{children}</a>

  )
}

export default Link
