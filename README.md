# UNMAINTAINED - cookie-string [![Build Status](https://travis-ci.org/mightyCrow/cookie-string.svg?branch=master)](https://travis-ci.org/mightyCrow/cookie-string) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![npm version](https://badge.fury.io/js/cookie-string.svg)](https://badge.fury.io/js/cookie-string) [![GitHub version](https://badge.fury.io/gh/mightyCrow%2Fcookie-string.svg)](https://badge.fury.io/gh/mightyCrow%2Fcookie-string)

Converts given key, value and options(path, domain, maxAge, expires and secure) into a string that can be used for client-side cookie storage.


## Install

```sh
$ npm install --save cookie-string
```

## Usage

```js
const cookieString = require('cookie-string');

cookieString('hello', 'world'); // Returns 'hello=world'
cookieString('hello', 'world', {domain: 'example.com'}); // 'hello=world;domain=example.com'
cookieString('hello', 'world', {secure: true}); // 'hello=world;secure'
```


## API

### cookieString(key, value, options)

#### key

Type: `String`

Key for the cookie to store.

#### key

Type: `String`

Value for the given key.

#### options

Object containing additinal options to be stored with the cookie.

##### path

Type: `String`

`;path=path`: (e.g., '/', '/mydir')

##### domain

Type: `String`

`;domain=domain`: (e.g., 'example.com' or 'subdomain.example.com').

##### maxAge

Type: `Int`

`;max-age=max-age-in-seconds`: (e.g., 60*60*24*365 or 31536000 for a year)

##### expires

Type: `Date`

`;expires=date-in-GMTString-format`: (e.g. `new Date()`). Date will be implicitly converted into to UTC string format.

##### secured

Type: `Boolean`

`;secure`: Cookie to only be transmitted over secure protocol as https.


## Contributing
All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License
Created with ♥ by [Tiaan du Plessis](https://github.com/mightyCrow). Licensed under the MIT License.
