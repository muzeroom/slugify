# slugify

A simple wrapper around the [mollusc](https://github.com/muzeroom/mollusc) library;

## Installation
Put the following in your `package.json` file under dependencies

`"slugify": "git+https://github.com/muzeroom/slugify",`

## Usage

```js
const slugify = require('slugify')

console.log(slugify('Hello World')) //prints hello-world
console.log(slugify('Hello World', {uuid: true})) //prints hello-world-a6b1c3
console.log(slugify('Hello World', {uuid: true, uuidLength: 4})) //prints hello-world-a6b1
```

## Testing

`npm test`
