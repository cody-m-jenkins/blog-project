import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/navbar.css'
import { withContext } from './AppContext'


const Navbar = (props) => {
    return (
        <nav className='navbar-container'>
            {
                !props.token ?
                    <React.Fragment>
                        <div className='nav-link'>
                            <Link to='/'>Home</Link>
                        </div>

                        <div className='nav-link'>
                            <Link to='/about'>About</Link>
                        </div>

                        <div className='nav-login'>
                            <Link to='/login'>Login</Link>
                        </div>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className='nav-link'>
                            <Link to='/'>Home</Link>
                        </div>

                        <div className='nav-link'>
                            <Link to='/About'>About</Link>
                        </div>

                        <div className='nav-link'>
                            <Link to='/api/postpage'>Post</Link>
                        </div>
                        
                        <button className='logout-button' onClick={() => props.logout()}>Logout</button>
                    </React.Fragment>

            }
        </nav>
    )
}

export default withContext(Navbar)