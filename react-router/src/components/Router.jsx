// TODO: prop types
// TODO: We need to make sure that every route has a unique path
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo, Children } from 'react'
import { match } from 'path-to-regexp'
import { NAVIGATION } from '../const'

const Router = ({ children, router, default: Default = () => <h1>Not Found</h1> }) => {
  const [currentPath, setcuerrentPath] = useState(window.location.pathname)
  const routesFromChildren = useMemo(() => Children.map(children, (child, i) => {
    const { name } = child?.type
    if (name !== 'Route') return null // skip value
    return child.props
  }), [children])
  const routes = useMemo(() => routesFromChildren.concat(router), [children, router])
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
