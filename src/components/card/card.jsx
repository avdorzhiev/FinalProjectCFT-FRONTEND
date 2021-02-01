import React, { Component } from 'react';
import './card.css'
import emptyLike from '../../static/images/emptyLike.svg'
import redLike from '../../static/images/Like.svg'
import usersRequest from '../../api/users';

export class Card extends Component {

    state = {active: false}


    async like(event){
        const id = localStorage.getItem('id');
        event.stopPropagation();
        this.setState({active: !this.state.active})
        console.log(this)
        await usersRequest.get(`/${id}`).then(user=>{
            usersRequest.patch(`/${id}`, {likes: this.props.imdbID}).then(
                response => console.log(response)
            ).catch(err => console.log(err))
        }) 
    }

    render() {
        const { toggle, imbdId } = this.props;
        return (
            <React.Fragment>
                <div className='card' onClick={() => { imbdId(this.props.imdbID); toggle() }}>
                    <div className='image-box'>
                        <img src={this.props.poster} alt={`Posters ${this.props.title}`} className='image'/>
                    </div>
                    <p className='title'>{this.props.title}</p>
                    <p className='rating'><span>IMDB rating:</span> {this.props.imdbRating}</p>
                    <div className='plot'>
                        <span>Plot:</span>
                        <p>{this.props.plot}</p>
                    </div>
                    <p className='type'><span>Type: </span>{this.props.type}</p>
                    <p className='genre'><span>Genre: </span>{this.props.genre}</p>
                    <p className='votes'><span>Votes: </span>{this.props.imdbVotes} likes</p>
                    <div className='like' onClick = {event => this.like(event)}>
                        <img src={emptyLike} className="emptyLike" style = {{visibility : this.state.active ? 'hidden ' : 'visible'}} onClick = {event => this.like(event)}/>

                        <img src={redLike} className="redLike" style = {{visibility : this.state.active ? 'visible ' : 'hidden'}} onClick = {event => this.like(event)}/>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}