import { React, Component} from 'react';
import moviesRequest from '../../api/moviesRequest';
import usersRequest from '../../api/users';
import { Card } from '../card/card';
import './userProfile.css';
import img from '../../static/images/sad.png'

export class UserProfile extends Component {

    state = {username: ''}

    id = localStorage.getItem('id');
    likeMovies = []

    getFavorite(){
        usersRequest.get(`/${this.id}`).then(userdata => {
            userdata.data.user.likes.forEach(id => {
                moviesRequest.get(`/id/${id}`).then(response => {
                    this.likeMovies.push(response.data.movies);
                    console.log(response.data.movies)
                }) 
            });
            this.setState({username: userdata.data.user.username});
        })
    }

    render(){
        this.getFavorite()
        console.log(!this.likeMovies)
        return(
            <div className='profile'>
                <div className='back'/>
                <h1>Hello {this.state.username}</h1>
                <div className='likes' style={{display: this.likeMovies.length > 0 ? 'block' : 'none'}}>
                    <h3>Films that you liked</h3>
                    {this.likeMovies.map((movies, idx) => {
                        return (<Card
                            className='card'
                            key={idx}
                            title={movies.Title}
                            imdbRating={movies.imdbRating}
                            plot={movies.Plot}
                            type={movies.Type}
                            genre={movies.Genre}
                            poster={movies.Poster}
                            imdbVotes={movies.imdbVotes}
                            language={movies.Language}
                            director={movies.Director}
                            releaseDate={movies.Released}
                            actors={movies.Actors}
                            imdbID={movies.imdbID}
                            toggle={this.toggle}
                            imbdId={(imdbId) => this.imbdId(imdbId)}
                        />)
                    })}
                </div>
                <div className='not-likes' style={{display: this.likeMovies.length > 0 ? 'none' : 'block'}}>
                    <h3>There is nothing in the favorites</h3>
                    <img src={img} alt='sad picture'/>
                </div>
            </div>
        )
    }
}