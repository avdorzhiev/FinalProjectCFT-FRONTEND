import React from 'react';

import { withRouter } from 'react-router-dom';
import './register-form.css'
import usersRequest from '../../api/users';

export class RegisterForm extends React.Component {
    state = { incorrect: 'none', enter: 'none' };

    inputNameRef = React.createRef();
    inputPasswordRef = React.createRef();
    inputPasswordAgainRef = React.createRef();
    

    register = () => {
        const nameValue = this.inputNameRef.current.value;
        const passwordValue1 = this.inputPasswordRef.current.value;
        const passwordValue2 = this.inputPasswordAgainRef.current.value;

        if (!nameValue || !passwordValue1 || !passwordValue2) {
            this.setState({ enter: 'block' })
            this.setState({ incorrect: 'none' })
            return
        } else {
            this.setState({ enter: 'none' })
        }

        if (passwordValue1 !== passwordValue2) {
            this.setState({ incorrect: 'block' })
        } else {
            this.setState({ incorrect: 'none' })
            this.setState({ incorrect: 'none' })
            usersRequest.post('', {id: Math.random().toString(36).substr(2, 9), username: nameValue, password: passwordValue2 })
            .then(() => {
                this.props.history.push('/')
            }).catch(response => alert(`ERROR: ${response.status}`)
            )
        }
    }

    cancel = () => {
        this.props.history.push('/auth')
    }

    render() {
        return (
            <div>
                <div className='back' />
                <div className="filter" />
                <div className="form">
                    <h1>Register Form</h1>
                    <span>Enter name:</span>
                    <input type='text' placeholder='name' required ref={this.inputNameRef} />
                    <span>Enter password:</span>
                    <input type='password' placeholder='password' required ref={this.inputPasswordRef} />
                    <span>Enter password again:</span>
                    <input type='password' placeholder='password again' required ref={this.inputPasswordAgainRef} />
                    <div className='error' style={{display: this.state.incorrect}}>
                        <p>Incorrect login or password!</p>
                    </div>
                    <div className='error' style={{display: this.state.enter}}>
                        <p>Enter login and password!</p>
                    </div>
                    <button className='btn' onClick={this.register}>Register Now</button>
                    <button className='btn' onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default withRouter(RegisterForm);