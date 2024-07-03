import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import HeroBanner from './HeroBanner/HeroBanner'
import Academics from './Academics/Academics'

function App() {

  return (
    <>
    <Navbar />
    <HeroBanner />
    <Academics />
    </>
  )
}

export default App
