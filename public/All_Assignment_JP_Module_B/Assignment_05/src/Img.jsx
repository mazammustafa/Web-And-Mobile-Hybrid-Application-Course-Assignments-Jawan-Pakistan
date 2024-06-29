import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Img = () => {
    return (
    <>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <img src={viteLogo} className="logo" alt="Vite logo" />
    </>
)
}

export default Img;