import React from 'react'
import '../CSS/postpage.css'

const PostPage = (props) => {
    return(
        <div className='postpage-container'>
            <form>
                <div className='postpage-input-title'>
                    <label>Title:</label>
                    <input
                    className='input-title'
                    required type='string'
                    name='title'
                    placeholder='(100 character max)'
                    maxLength='100' 
                    />
                </div>
                <div className='postpage-input-description'>
                    <label>Description:</label>
                    <input
                    className='input-description'
                    required type='string'
                    name='description'
                    placeholder='(300 character max)'
                    maxLength='300' 
                    />
                </div>
                <div className='postpage-input-body'>
                    <label>Body:</label>
                    <input
                    className='input-body'
                    required type='string'
                    name='body'
                    placeholder='Body'
                    maxLength='' 
                    />
                </div>
                <div className='postpage-date'
                    name='date'
                    value=''
                    >
                </div>
                
            </form>
        </div>
    )
}

export default PostPage