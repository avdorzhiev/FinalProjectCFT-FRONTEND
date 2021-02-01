import React, { Component } from "react";
import './AuthPage.css'
import { NavLink } from 'react-router-dom';
import usersRequest from '../../api/users';
import './AuthPage.css'


export class AuthPage extends Component {
  state = { incorrect: 'none', enter: 'none' };

  inputNameRef = React.createRef();
  inputPasswordRef = React.createRef();

  handleLogin = event => {
    this.username = event.target.value;
    // this.setState({ username: event.target.value })
  }

  handlePassword = event => {
    this.password = event.target.value;
    // this.setState({ password: event.target.value })
  }

  auth = () => {
    usersRequest.get().then(response => {
      console.log(response);
      const nameValue = this.inputNameRef.current.value;
      const passwordValue = this.inputPasswordRef.current.value;

      const [user] = response.data.users.filter(item => item.username === nameValue)

      if (!nameValue || !passwordValue) {
        this.setState({ incorrect: 'none' })
        this.setState({ enter: 'block' })
      } else {
        this.setState({ enter: 'none' })
        if (user && user.password === passwordValue) {
          console.log(user.password);
          localStorage.setItem('id', user.id);
          this.props.history.push({
            pathname: '/',
          })
        } else {
          this.setState({ incorrect: 'block' });
        }
      }
    })
  }
  render() {
    const path = '/registration'

    if (localStorage.getItem('username')) {
      this.props.push('/')
    }

    return (
      <div>
        <div className='back' />
        <div className="filter" />
        <div className="form">
          <h1>Login Form</h1>
          <form>
            <input type='text' placeholder='name' required ref={this.inputNameRef} />
            <input type='password' placeholder='password' required ref={this.inputPasswordRef} />
          </form>
          <button className='btn' onClick={this.auth}>Login</button>
          <div className='error' style={{ display: this.state.incorrect }}>
            <p>Incorrect login or password!</p>
          </div>
          <div className='error' style={{ display: this.state.enter }}>
            <p>Enter login and password!</p>
          </div>
          <div className="bottom">
            <span>Have no account? </span>
            <NavLink to={path}>Create new</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
