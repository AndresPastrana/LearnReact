// TODO: prop types
// TODO: We need to make sure that every route has a unique path
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo, Children } from 'react'
import { match } from 'path-to-regexp'
import { NAVIGATION } from '../const'
import { getCurrentLocation } from '../utils/utils'

const Router = ({ router = [], children = [], default: Default = () => <h1>404 Not Found</h1> }) => {
  const [currentPath, setcuerrentPath] = useState(() => getCurrentLocation())

  const routesFromChildren = useMemo(() => Children.map(children, (child, i) => {
    const name = child.type?.name ?? ''
    if (name !== 'Route') return null // skip value
    return { ...child.props }
  }), [children])
  const routes = useMemo(() => router.concat(routesFromChildren), [children, router])
  let params = {}

  useEffect(() => {
    const listenner = ({ target }) => {
      setcuerrentPath(getCurrentLocation())
    }

    window.addEventListener(NAVIGATION.PUSHSTATE, listenner)
    window.addEventListener(NAVIGATION.POPSTATE, listenner)

    return () => {
      window.removeEventListener(NAVIGATION.PUSHSTATE, listenner)
      window.removeEventListener(NAVIGATION.POPSTATE, listenner)
    }
  }, [])

  // look for a path to match and returns the componet and undefine otherwise
  const Page = routes.find(({ path }) => {
    const urlMatch = match(path, { decode: decodeURIComponent }) // Take a path and returns a function
    const matched = urlMatch(currentPath)
    params = matched?.params
    return !!matched
  })?.component
  return Page ? <Page params={params}/> : <Default/>
}

export default Router
