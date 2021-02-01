import React, { Component } from 'react';
import { Card } from '../../card/card';
import { PopUp } from "./popUp/popUp";
import './resultPage.css'


export class ResultPage extends Component {
    state = {
        isActive: 'pop-up-hidden',
        imdbID: ''
    }

    toggle = () =>
        this.setState({
            isActive: 'pop-up-visible'
        })

    imbdId = imdbID => {
        console.log(imdbID)
        this.setState({
            imdbID: imdbID
        })
    }
    setHiddenPopUp = () => {
        this.setState({
            isActive: 'pop-up-hidden'
        })
    }
    closePopUp = (event) => {
        if (event.target.classList.contains('pop-up-visible')) {
            this.setHiddenPopUp();
        }
    }
    
    render() {
        const searchedMovies = this.props.searchedMovies;
        const selectedMovie = searchedMovies.filter(el => el.imdbID === this.state.imdbID)[0] || []
        return (
            <div onClick={this.closePopUp}>
                <PopUp
                    setHiddenPopUp={this.setHiddenPopUp}
                    poster={selectedMovie.Poster}
                    title={selectedMovie.Title}
                    imdbRating={selectedMovie.imdbRating}
                    type={selectedMovie.Type}
                    genre={selectedMovie.Genre}
                    language={selectedMovie.Language}
                    plot={selectedMovie.Plot}
                    releaseDate={selectedMovie.Released}
                    director={selectedMovie.Director}
                    actors={selectedMovie.Actors}
                    isActive={this.state.isActive}
                />
                <p className='result'>Movies with keyword '{this.props.requestText}'</p>

                <div className='result-page'>
                    {searchedMovies.map((movies, idx) => {
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
            </div>
        )
    }
}