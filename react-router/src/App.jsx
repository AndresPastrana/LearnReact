import React, { lazy, Suspense } from 'react'
import Link from './components/Link'
import Route from './components/Route'
import Router from './components/Router'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const App = () => {
  const router = [
    { path: '/', component: () => <h1>Hola</h1> },
    {
      path: '/home',
      component: Home
    }, {
      path: '/about',
      component: About
    }, {
      path: '/search/order/:id',
      component: ({ params }) => <h1>Buscador {JSON.stringify(params)}</h1>
    }]

  return (
    <div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
      </nav>

      <div>
        <Suspense fallback={<div>Loading....</div>}>
        <Router router={router}>
          <Route path="/otro/path" component={() => <h1>Route as child 1</h1>}/>
          <Route path="/otro/path" component={() => <h1>Route as child 2</h1>}/>
          <h1>Skiped children</h1>
        </Router>
        </Suspense>

      </div>
    </div>
  )
}

export default App
