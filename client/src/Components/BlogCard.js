import React from 'react'
import '../CSS/blog-card.css'
import { withContext } from '../AppContext.js'

const BlogCard = (props) => {
    
    let {title, body, imgUrl, date} = props.post
   
    return(
        <div className='blogcard-container'>
        <div className='blogcard-image'><img src={imgUrl} alt ='image' width='100%'/></div>
            <h1 className='blogcard-title'>{title}</h1>
            <br />
            <div className='blogcard-body'>{body}</div>
            <br />
            
            {/* <div className='blogcard-date'>{date}</div> */}
        </div>
    )

}

export default withContext (BlogCard)