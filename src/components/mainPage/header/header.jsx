import React, {Component} from 'react'
import './header.css'
import moviesRequest from "../../../api/moviesRequest";
import {NavLink} from 'react-router-dom';

export class Header extends Component {

  getMovies = (event) => {
    event.preventDefault();
    const inputValue = this.inputRef.current.value;
    moviesRequest.get(`/${inputValue}`).then(response => {
      const movies = response.data.movies;
      this.props.history.push(`name=${inputValue}`, movies.map(el => JSON.parse(el)), this.inputRef.current.value)
    })
      .catch(err => {
        console.log(err)
      })
  }

  logout = (event) => {
    localStorage.removeItem('id')
    this.props.history.push('/auth')
  }

  inputRef = React.createRef();
  render() {
    return (
      <div id="navbar">
        <div className="brand"><NavLink to="/"></NavLink></div>
        <form className="search">
          <input className="movie-input" type="text" placeholder="Enter movie keyword" name="movie" ref={this.inputRef} required/>
          <button onClick={(event) => this.getMovies(event)}>Find</button>
        </form>
        <button onClick={(event) => this.logout(event)} className='logout'>Logout</button>
      </div>
    )
  }
}