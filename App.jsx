import { useState } from 'react'
import { Sidenav } from './components/Sidenav'
import Home from './components/Home'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {


  return (
    <>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
      <Contact />

    </>
  )
}

export default App
