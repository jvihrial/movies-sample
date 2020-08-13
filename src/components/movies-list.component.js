import React, { Component } from "react";
import axios from "axios";

const Movie = (props) => (
  <tr>
    <td>{props.movie.title}</td>
    <td>{props.movie.genre}</td>
    <td>{props.movie.viewcount}</td>
  </tr>
);
export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      movies: [],
    };

    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      .get("http://localhost:5000/movies/genre?genre=" + this.state.genre)
      .then((response) => {
        console.log(response);

        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  movies() {
    return this.state.movies.map((curretMovie) => {
      return <Movie movie={curretMovie} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Get movies</h3>
        <form onSubmit={this.onSubmit}>
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
            <input
              type="submit"
              value="Get movies"
              className="btn btn-primary"
            />
          </div>
        </form>
        <div>
          <h3>Loaded movies</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Viewcount</th>
              </tr>
            </thead>
            <tbody>{this.movies()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
