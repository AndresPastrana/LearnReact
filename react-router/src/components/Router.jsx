/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { match } from 'path-to-regexp'

import { NAVIGATION } from '../const'
const Router = ({ router, default: Default = () => <h1>Not Found</h1> }) => {
  const [currentPath, setcuerrentPath] = useState(window.location.pathname)
  let params = {}
  useEffect(() => {
    const listenner = ({ target }) => {
      const { pathname } = target.location
      setcuerrentPath(pathname)
    }

    window.addEventListener(NAVIGATION.PUSHSTATE, listenner)
    window.addEventListener(NAVIGATION.POPSTATE, listenner)

    return () => {
      window.removeEventListener(NAVIGATION.PUSHSTATE, listenner)
      window.removeEventListener(NAVIGATION.POPSTATE, listenner)
    }
  }, [])

  // const dynamicSegments = {}
  // look for a path to match and returns the componet and undefine otherwise

  const Page = router.find(({ path }) => {
    console.log('Inside Find')
    if (path === currentPath) return true

    const urlMatch = match(path, { decode: decodeURIComponent }) // Take a path and returns a function
    const matched = urlMatch(currentPath)
    params = matched?.params
    return !!matched
  })?.component

  return Page ? <Page params={params}/> : <Default/>
}

export default Router
