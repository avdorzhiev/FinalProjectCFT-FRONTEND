import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './searchPage.css'
import moviesRequest from "../../api/moviesRequest";

export class SearchPage extends Component {
  getMovies = (event) => {
    event.preventDefault();
    const inputValue = this.inputRef.current.value;
    moviesRequest.get(`/${inputValue}`).then(response => {
      console.log('request done')
      const movies = response.data.movies;
      this.props.history.push(`name=${inputValue}`, movies.map(el => JSON.parse(el)), this.inputRef.current.value)
    })
      .catch(err => {
        console.log(err)
      })
  }

  inputRef = React.createRef();

  isAuthorized() {
    console.log(localStorage.getItem('id'))
    if(!localStorage.getItem('id')) {
      this.props.history.push('/auth')
    }
  }

  render() {
    this.isAuthorized();

    return (
      <div>
        <div className="back" />
        <div className="filter" />
        <div className="container">
          <p className="search">Search Movie </p>
          <form className="main-form">
            <input className="main-search" type="text" placeholder="Enter Movie name or keyword" name="movie" required ref={this.inputRef} />
            <input type="submit" value="Find" onClick={(event) => this.getMovies(event)} />
          </form>
        </div>
      </div>
    )
  }
}

