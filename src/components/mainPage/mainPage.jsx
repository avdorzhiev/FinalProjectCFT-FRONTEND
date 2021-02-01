import React, {Component} from "react";
import {ResultPage} from "./resultPage/resultPage";
import {Header} from "./header/header";

export class MainPage extends Component {
  state = {
    searchedMovies: [],
  }
  stateController = () => {
    this.setState({
      searchedMovies: this.props.location.state || []
    })
  }

  render() {
    if(this.state.searchedMovies!==this.props.location.state) {
      this.stateController();
    }
    return (
      <div>
        <Header history={this.props.history}/>
        <ResultPage searchedMovies={this.state.searchedMovies} requestText={this.props.match.params.name}/>
      </div>
    )
  }
}