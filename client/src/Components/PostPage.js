import React, { Component } from 'react'
import { withContext } from '../AppContext'
import '../CSS/postpage.css'

class PostPage extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            body: '',
            imgUrl: ''
        }
    }

    handleChange = (e) => {
        e.persist()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            title: '',
            description: '',
            body: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBlog(this.state)
        .then(response => {
            this.clearInputs()
        })
        .catch(err => console.error(err.response.data.message))
    }
    
    render() {
    return(
        <div className='postpage-container'>
            <form onSubmit= {this.handleSubmit}>
                <div className='postpage-input-title'>
                    <label>Title:</label>
                    <input
                    className='input-title'
                    required type='string'
                    name='title'
                    placeholder='Required (100 character max)'
                    maxLength='100' 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                </div>
                {/* <div className='postpage-input-description'>
                    <label>Description:</label>
                    <input
                    className='input-description'
                    required type='string'
                    name='description'
                    placeholder='(300 character max)'
                    maxLength='300'
                    value={this.state.description}
                    onChange={this.handleChange} 
                    />
                </div> */}
                <div className='postpage-input-body'>
                    <label>Body:</label>
                    <input
                    className='input-body'
                    required type='string'
                    name='body'
                    placeholder='Body'
                    maxLength='' 
                    value={this.state.body}
                    onChange={this.handleChange}
                    />
                </div>
                <div className='postpage-input-imgUrl'>
                    <label>Img URL:</label>
                    <input
                    className='input-imgUrl'
                    name='imgUrl'
                    placeholder='Image URL'
                    maxLength='' 
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                    />
                </div>
                <div className='postpage-date'
                    name='date'
                    value=''
                    >
                </div>
              <button>Submit</button>  
            </form>
        </div>
        )
    }
 }


export default withContext (PostPage)