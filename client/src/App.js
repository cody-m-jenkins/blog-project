import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Auth/Login'
import PostPage from './Components/PostPage'
import ProtectedRoute from './Auth/ProtectedRoute'
import './CSS/app.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path = '/' component={Home} />
                <Route path = '/about' component={About} />
                <Route path = '/login' component={Login} />
                <ProtectedRoute path = '/api/postpage' component={PostPage} />
            </Switch>
        </div>
    )
}

export default App