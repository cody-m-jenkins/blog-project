import React from 'react'
import BlogCard from './BlogCard'
import Header from './Header'
import '../CSS/home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Home</h1>
            <Header />
            <BlogCard />
        </div>
    )
}

export default Home