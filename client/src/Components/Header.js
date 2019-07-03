import React from 'react'
import '../CSS/header.css'
import headshot from '../Photos/headerheadshot.gif'
import mountain from '../Photos/mountain-header.jpg'



const Header = () => {
    return (
        
        <div className='header-container'>
            <br /><h1>Winston's Adventure Blog</h1><br />
            <img className='header-headshot' src={headshot} alt='headshot of Winston' />
            {/* <img className='header-background' src={mountain} alt='mountain background' /> */}
        </div>
    )
}

export default Header