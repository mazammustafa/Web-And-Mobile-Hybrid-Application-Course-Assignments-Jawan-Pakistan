import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import HeroBanner from './HeroBanner/HeroBanner'
import Academics from './Academics/Academics'
import LmsPlatform from './LmsPlatform/LmsPlatform'
// import Button from './Button/Button'
import CampusLife from './CampusLife/CampusLife'

function App() {

  return (
    <>
    <Navbar />
    <HeroBanner />
    <Academics />
    
    <LmsPlatform />
    <CampusLife />
    {/* <Button /> */}
    </>
  )
}

export default App
