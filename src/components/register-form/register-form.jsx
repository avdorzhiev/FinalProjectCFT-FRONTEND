import React from 'react';

import { withRouter } from 'react-router-dom';
import './register-form.css'

class RegisterForm extends React.Component {

    state = { username: '', password: '', language: 'en' };

    handleLogin = event => {
        this.setState({ username: event.target.value })
    }

    handlePassword = event => {
        this.setState({ password: event.target.value })
    }

    handleLanguage = event => {
        this.setState({language: event.target.value});
    }

    register = () => {
        alert(`Welcome ${this.state.username} password: ${this.state.password} language: ${this.state.language}`)
    }

    cancel = () => {
        this.props.history.push('/auth')
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className='container register'>
                <div className='card'>
                    <h1>Register Form</h1> 
                    <span>Enter name:</span>
                    <input type='text' placeholder='name' value={username} onChange={this.handleLogin} />
                    <span>Enter password:</span>
                    <input type='password' placeholder='password' value={password} onChange={this.handlePassword} />
                    <span>Select the language you want to learn:</span>
                    <select placeholder='language' onChange={this.handleLanguage}>
                        <option value='en'>English</option>
                        <option value='ru'>Russian</option>
                    </select>
                    <button className='btn' onClick={this.register}>Register Now</button>
                    <button className='btn'onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default withRouter(RegisterForm);