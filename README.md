# Bad Jokes API

A collection of bad (or not!) jokes.

## Getting started

1. Install NodeJS
2. `npm install`
3. `node index.js`

Server is accessible on [https://localhost:3000](https://localhost:3000) by default but you can use `PORT` env variable to change that

## Endpoints

- GET `/jokes/random` - Gives a random joke.
- GET `/jokes/:id` - Gives a joke matching the `:id` ID.
- GET `/jokes` - Lists all the available jokes. You can filter the list by `language`.

### Query parameters

| Name     | Required | Type   | Options            | Description                                                                                                                                  |
| -------- | -------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| language | NO       | string | `en\|el`           | Gets a random joke in a specific language or filters the jokes list by that language.                                                        |
| format   | NO       | string | `html\|text\|json` | When it's value is `html` will respond with HTML. When it's `text` will respond with the text as is. In any other case will respond in json. |

### Response

```JSON
{
  "id": 10010,
  "text": "I'd tell a UDP joke, but you might not get it.",
  "language": "en"
}
```

## Contribution

Pull requests are welcome. Just keep the jokes civil and preferably avoid jokes about politics and religions.

## Disclaimer

I'm not the author of any joke. The "jokes collection" comes from jokes I found/heard here and there or by people that created a pull request.

## License

MIT
