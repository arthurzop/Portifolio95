import React from 'react'
import './offScreen.css'
import Logo from '../../assets/logo.png'

export default function OffScreen () {
    return(
        <>
            <div className="off-container">
                <h1 className='off-text'>Please wait while the website <br />shuts down...</h1>
                <img src={Logo} alt="" className='off-image' />
            </div>
        </>
    )
}