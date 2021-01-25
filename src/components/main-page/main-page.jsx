import React from 'react';
import { withRouter } from 'react-router-dom';
import cardsRequest from '../../api/cards';

import usersRequest from '../../api/users';

import Card from './card/card';
import './main-page.css'

class MainPage extends React.Component {

    state = {
        userData: {},
        noCard: '0',
        cards: []
    };


    getData() {
        const id = localStorage.getItem('id');
        usersRequest.get(`/${id}`).then(response => this.setState({ userData: response.data.user }));
    };

    getCard(id) {
        cardsRequest.get(`/${id}`).then(response => this.state.cards.push(response.data.card))
    }

    checkCards(user) {
        if (!user.cards) {
            for (let i = 1; i <= 3; i++) {
                this.getCard(i);
            }
            return;
        }
        return true;
    }

    pushCard() {

    };

    start() {
        this.setState({ noCard: 1 });
    }

    render() {
        this.getData()
        console.log(this.state.userData)        
        return (
            <div>
                <button className='btn' >Start</button>
                {/* <Card if={this.start} /> */}
            </div>
        )
    }
}

export default MainPage;