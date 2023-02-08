const elJokes = require("./el");
const enJokes = require("./en");

function convertJokesToObjects(jokes, language, idSeed = 0) {
  return jokes.map((joke, index) => ({
    id: index + idSeed,
    text: joke,
    language: language,
  }));
}

const jokesMapping = {
  el: convertJokesToObjects(elJokes, "el", 0),
  en: convertJokesToObjects(enJokes, "en", 10_000),
};
const jokes = Object.keys(jokesMapping).reduce((acc, key) => {
  return acc.concat(jokesMapping[key]);
}, []);

// Utility functions

function getJokeById(id) {
  return jokes.find((joke) => joke.id === id);
}

function getJokesByLanguage(language) {
  return jokesMapping[language] || [];
}

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

function getRandomJokeWithFilters({ language }) {
  let filteredJokes = jokes;
  if (language) {
    filteredJokes = getJokesByLanguage(language);
  }
  return filteredJokes[Math.floor(Math.random() * filteredJokes.length)];
}

function getAllJokesWithFilters({ language }) {
  let filteredJokes = jokes;
  if (language) {
    filteredJokes = getJokesByLanguage(language);
  }
  return filteredJokes;
}

module.exports = {
  getJokeById,
  getJokesByLanguage,
  getRandomJoke,
  getRandomJokeWithFilters,
  getAllJokesWithFilters,
};
