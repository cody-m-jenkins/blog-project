import React from 'react'
import Blog from './Blog'
import Header from './Header'
import '../CSS/home.css'
import { withContext } from '../AppContext'

const Home = () => {

    return (
        <div className='home-container'>
            <Header />
            <Blog />
        </div>
    )
}

export default withContext (Home)