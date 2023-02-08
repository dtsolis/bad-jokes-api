const package = require("./package.json");

function textToHtml(text) {
  return text.replace(/\n/g, "<br>");
}

function respondWithJoke(res, joke, format) {
  if (format === "html") {
    res.send(textToHtml(joke.text));
  } else if (format === "text") {
    res.send(joke.text);
  } else {
    res.json(joke);
  }
}

module.exports = {
  textToHtml,
  respondWithJoke,
};
