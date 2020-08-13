const router = require("express").Router();
let movie = require("../models/movie.model");
const Movie = require("../models/movie.model");

router.route("/genre").get((req, res) => {
  console.log(req.query.genre);

  Movie.find({ genre: req.query.genre })
    .then((movies) => {
      let sorted = movies
        .sort(function (a, b) {
          return a.viewcount - b.viewcount;
        })
        .reverse();

      console.log(sorted);

      res.json(sorted);
    })
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const viewcount = req.body.viewcount;

  const newMovie = new Movie({
    title,
    genre,
    viewcount,
  });

  newMovie
    .save()
    .then(() => res.json("new movie added"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
