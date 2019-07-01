import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/navbar.css'
import { withContext } from './AppContext'


const Navbar = (props) => {
    return (
        <div className='navbar-container'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='admin/postpage'>Post</Link>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default withContext(Navbar)