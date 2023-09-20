/* eslint-disable no-undef */
// Uncoment the line below if globas are not enable
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import React from 'react'
// TODO import all the routes components from an index.js
import Router from '../src/components/Router'
import Link from '../src/components/Link'
import Route from '../src/components/Route'
import { getCurrentLocation } from '../src/utils/utils'

const Default = () => <h1>404</h1>
const HomePage = () => <h1>Home Page</h1>
const AboutPage = () => <h1>Page</h1>
const Landing = () => <h1>Landing</h1>
const router = [
  { path: '/', component: Landing },
  {
    path: '/home',
    component: HomePage
  }, {
    path: '/about',
    component: AboutPage
  }, {
    path: '/search/order/:id',
    component: ({ params }) => <h1>Buscador {JSON.stringify(params)}</h1>
  }]
const sampleText = 'sampleText'
const App = () => {
  return <div>
    <nav>
      <Link to="home">Go to home</Link>
      <Link to="about">Go to about</Link>
    </nav>

    <div>
      <Router router={router} default={Default}>
        <Route path="/otro/path" component={() => <h1>Route as child 1</h1>}/>
        <Route path="/otro/path" component={() => <h1>Route as child 2</h1>}/>
      </Router>
    </div>
  </div>
}
describe('first', () => {
  vi.mock('../src/utils/utils.js', () => ({ getCurrentLocation: vi.fn() }))
  beforeEach(() => {
    vi.clearAllMocks() // Clears mock history
    cleanup() // Unmont the React Three
  })

  it('Shold render the default component in case there was no routes', async () => {
    render(<Router default={Default}/>)
    const element = await screen.findByText(404)
    expect(element.textContent).toBe('404')
  })
  it('Should ignore children diferents from the <Route/> component', async () => {
    render(<Router> <h1>{sampleText}</h1> </Router>)
    const el = screen.queryByText(sampleText)
    expect(el).not.toBeTruthy()
  })
  it('Should render the first route that matches', () => {
    // Set the default path to '/home'
    getCurrentLocation.mockReturnValueOnce('/home')
    // We do this by mocking a funcion that returns the current path
    render(<Router router={router} default={Default}/>)
    expect(screen.getByText(/Home Page/i)).toBeTruthy()
  })

  it('Should navigate when clicking the <Link> component', () => {
    getCurrentLocation.mockReturnValueOnce('/') // Return of the first call of the mock function
    getCurrentLocation.mockReturnValueOnce('/home') // Return of the second call of the mock function
    render(<App/>)

    // Get the link and make click
    const goToHomeLink = screen.getByText(/Go to home/i)
    fireEvent.click(goToHomeLink)

    // Check that the new route was renderd
    expect(screen.getByText(/Home Page/i)).toBeTruthy()
  })
})
