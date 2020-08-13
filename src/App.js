import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import MoviesList from "./components/movies-list.component";
import CreateMovie from "./components/create-movie.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={MoviesList} />
        <Route path="/create" component={CreateMovie} />
      </div>
    </Router>
  );
}

export default App;
