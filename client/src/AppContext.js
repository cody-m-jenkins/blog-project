import React, { Component } from 'react'
import axios from 'axios'



const AppContext = React.createContext()

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getBlogs()
    }

    getBlogs = () => {
        return axios.get("/")
            .then(response => {
                this.setState({ todos: response.data });
                return response;
            })
    }

    addBlog = (newBlog) => {
        axios.add('/blogs', newBlog)
            .then(response => {
                this.setState(prevState => {
                    return { blogs: [...prevState.blogs, response.data]}
                })
                return response
            })
    }

    editBlog = (blogId, blog) => {
        return axios.put(`/blog/${blogId}`, blog)
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
        return axios.delete(`/blog/${blogId}`)
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
        return axios.post("/auth/login", credentials)
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