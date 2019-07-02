import React, { Component } from 'react'
import axios from 'axios'
const blogAxios = axios.create()

blogAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext()

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            blogs: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getBlogs()
    }

    getBlogs = () => {
        return blogAxios.get("/blogs")
            .then(response => {
                console.log(response.data)
                this.setState({ blogs: response.data });
                return response;
            })
    }

    addBlog = (newBlog) => {
        return blogAxios.post('/blogs', newBlog)
            .then(response => {

                this.setState(prevState => {
                    return { blogs: [...prevState.blogs, response.data]}
                })
                console.log(response)
                return response
            })
    }

    editBlog = (blogId, blog) => {
        return blogAxios.put(`/api/blog/${blogId}`, blog)
            .then(response => {
                this.setState(prevState => {
                    const updatedBlogs = prevState.blogs.map(blog => {
                        return blog._id === response.data._id ? response.data : blog
                    })
                    return { blogs: updatedBlogs}
                })
                return response
            })
    }

    deleteBlog = (blogId) => {
        return blogAxios.delete(`/api/blog/${blogId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedBlogs = prevState.blogs.filter(blog => {
                        return blog._id !== blogId
                    })
                    return {blogs: updatedBlogs}
                })
                return response
            })
    }

    login = (credentials) => {
        return blogAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                })
                this.getBlogs()
                return response
            })
    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({
            user: {},
            token: ''
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getBlogs: this.getBlogs,
                    addBlog: this.addBlog,
                    editBlog: this.editBlog,
                    deleteBlog: this.deleteBlog,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
                >

                    {this.props.children}

                </AppContext.Provider>
        )
    }
}


export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}