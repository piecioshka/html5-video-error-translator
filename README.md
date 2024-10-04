# html5-video-error-translator

[![node version](https://img.shields.io/node/v/html5-video-error-translator.svg)](https://www.npmjs.com/package/html5-video-error-translator)
[![npm version](https://badge.fury.io/js/html5-video-error-translator.svg)](https://badge.fury.io/js/html5-video-error-translator)
[![downloads count](https://img.shields.io/npm/dt/html5-video-error-translator.svg)](https://www.npmjs.com/package/html5-video-error-translator)
[![license](https://img.shields.io/npm/l/html5-video-error-translator.svg)](https://www.npmjs.com/package/html5-video-error-translator)
[![travis-ci](https://api.travis-ci.com/piecioshka/html5-video-error-translator.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/html5-video-error-translator)
[![snyk](https://snyk.io/test/github/piecioshka/html5-video-error-translator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/html5-video-error-translator?targetFile=package.json)

:hammer: Translate HTML5 `<video>` error code to string

## Install

```bash
npm install html5-video-error-translator
```

## Usage

```javascript
var translate = require('html5-video-error-translator').translate;

// jQuery
$video.on('error', function (evt) {
    console.log(translate(evt);
});

// Pure
video.onerror = function (evt) {
    console.log(translate(evt);
};
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016-2019
