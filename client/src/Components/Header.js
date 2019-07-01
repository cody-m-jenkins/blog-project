import React from 'react'
import '../CSS/header.css'
import headshot from '../Photos/headerheadshot.gif'



const Header = () => {
    return (
        <div className='header-container'>
            <h1>Winston's Adventure Blog</h1>
            <img className='header-headshot' src={headshot} alt='headshot of Winston' />

        </div>
    )
}

export default Header