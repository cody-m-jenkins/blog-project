import React from 'react'
import BlogCard from './BlogCard'
import '../CSS/blog.css'
import { withContext } from '../AppContext';

const Blog = (props) => {
    console.log(props)
        const mappedBlogs = props.blogs.map((post, i) => <BlogCard key = {i} post={post}/>)
        return (
            <div className='full-blog-container'>
                { mappedBlogs }
            </div>
        )
}

export default withContext (Blog)