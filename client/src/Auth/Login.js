import React, {Component} from 'react'
import '../CSS/login.css'
import { withContext } from "../AppContext.js"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            erroMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            erroMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/auth/login"))
            .catch(err => {
                this.setState({errorMessage: err.data})
            })
    }
    
       render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                <br />
                    <h3>Log In</h3>
                    <br />
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                        <br />
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                        <br />
                    <button type="submit">Submit</button>
                </form>
                {
                this.state.errorMessage &&
                <p style={{color: "red"}}>{this.state.errorMessage}</p>
            }
            </div>
        )
    }
}


export default withContext(Login);
