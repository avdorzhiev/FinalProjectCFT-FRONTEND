import React, {Component} from 'react'

import './popUp.css'

export class PopUp extends Component {
  render() {
    const {isActive, setHiddenPopUp} = this.props;
    return (
      <div className={`${isActive} big-card`}>
        <div className="movie-data open">
          <img className="cover-image" src={`${this.props.poster}`} alt={`poster for: ${this.props.poster}`}/>
          <img className="main-image" src={`${this.props.poster}`} alt={`poster for: ${this.props.poster}`}/>
          <p className="close-icon" onClick={setHiddenPopUp}> x </p>
          <div className="movie-details">
            <p id="topic" className="movie-title">{this.props.title}</p>
            <div className="movie-inside">
              <p className="card-rating"><span className="topic">IMDB rating: </span>
                <span className="rating">{this.props.imdbRating}</span></p>
              <p className="movie-type"><span className="topic">Type: </span>{this.props.type}</p>
              <p className="movie-genre"><span className="topic">Genre: </span> {this.props.genre}</p>
              <p className="movie-lang"><span className="topic">Language: </span> {this.props.language}</p>
              <span className="topic">Plot:</span><br/><p className="movie-plot">{this.props.plot}</p>
              <p className="movie-release"><span className="topic">Release date: </span> {this.props.releaseDate}</p>
              <p className="movie-director"><span className="topic">Director: </span> {this.props.director}</p>
              <p className="movie-cast"><span className="topic">Cast: </span>{this.props.actors}</p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}