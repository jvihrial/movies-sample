import React, { Component } from "react";
import axios from "axios";

export default class CreateMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movietitle: "",
      genre: "",
      viewcount: 0,
    };

    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeViewCount = this.onChangeViewCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {}

  onChangeMovieTitle(e) {
    this.setState({
      movietitle: e.target.movietitle,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }
  onChangeViewCount(e) {
    this.setState({
      viewcount: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const movie = {
      title: this.state.movietitle,
      genre: this.state.genre,
      viewcount: this.state.viewcount,
    };

    axios
      .post("http://localhost:5000/movies/add", movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create new movie</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.movieTitle}
              onChange={this.onChangeMovieTitle}
            />
          </div>

          <div className="form-group">
            <label>Genre: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>Viewcount: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.viewcount}
              onChange={this.onChangeViewCount}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create new movie"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
