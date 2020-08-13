const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const moviesRouter = require("./routes/movies");
const usersRouter = require("./routes/users");
const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express(express.json()));
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("server is running at http://localhost:" + port);
});
