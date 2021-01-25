import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import usersRequest from '../../api/users';

import './auth-form.css';

class AuthForm extends React.Component {

    state = { username: '', password: '' };
    
    handleLogin = event => {
        this.setState({ username: event.target.value })
    }

    handlePassword = event => {
        this.setState({ password: event.target.value })
    }

    auth = () => {
        usersRequest.get().then(response => {
            console.log(response)
            const [user] = response.data.users.filter(item => item.username === this.state.username)
            
            if (user && user.password === this.state.password){
                localStorage.setItem('id', user.id);
                this.props.history.push({
                    pathname: '/main',
                })
            } else {
                alert('ERROR')
            }
        })
    }

    render() {
        const { username, password } = this.state;
        const path = '/register'

        return (
            <div className='container form'>
                <div className='form-control'>
                    <h1>Login Form</h1> 
                    <input type='text' placeholder='name' value={username} onChange={this.handleLogin} />
                    <input type='password' placeholder='password' value={password} onChange={this.handlePassword} />
                    <button className='btn' onClick={this.auth}>Login</button>

                    <div className="bottom">
                        <span>Have no account? </span>
                        <NavLink to={path}>Create new</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AuthForm)