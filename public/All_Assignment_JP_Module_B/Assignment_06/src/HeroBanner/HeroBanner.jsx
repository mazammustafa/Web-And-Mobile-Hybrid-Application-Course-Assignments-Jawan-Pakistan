import React from 'react'
import './HeroBanner.css'
import Button from '../Button/Button'

const HeroBanner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <p>Great Quality Cocial life</p>
              <h2>Discover the world of possible university.</h2>
              {/* <button>Get Started</button> */}
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
