import React from 'react'
import GobackArrow from './components/GobackArrow'
import Link from './components/Link'
import Router from './components/Router'
function Landing () {
  return (
    <>
      <h1>Esta es la Landin Page</h1>
      <GobackArrow />
    </>
  )
}
function AboutUs () {
  return <>
  <h1>Who are we ?</h1>
   <GobackArrow />
  </>
}
const App = () => {
  const router = [
    { path: '/', component: () => <h1>Hola</h1> },
    {
      path: '/home',
      component: Landing
    }, {
      path: '/about',
      component: AboutUs
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
      <Router router={router}/>
      </div>
    </div>
  )
}

export default App
