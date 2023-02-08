const express = require("express");
const cors = require("cors");
const jokes = require("./jokes");
const misc = require("./misc");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { joke: misc.textToHtml(jokes.getRandomJoke().text) });
});

app.get("/jokes/random", (req, res) => {
  const { language, format } = req.query;
  const joke = jokes.getRandomJokeWithFilters({ language });
  misc.respondWithJoke(res, joke, format);
});

app.get("/jokes/:id", (req, res, next) => {
  const { id } = req.params;
  const { format } = req.query;
  const joke = jokes.getJokeById(+id);
  if (joke) {
    misc.respondWithJoke(res, joke, format);
  } else {
    next({ status: 404, message: "Joke not found" });
  }
});

app.get("/jokes", (req, res) => {
  res.json(jokes.getAllJokesWithFilters(req.query));
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Listening on port ${PORT}`);
  } else {
    console.log("Server can't start. Error:", error);
  }
});
