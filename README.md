# html5-video-error-translator

[![node version](https://img.shields.io/node/v/html5-video-error-translator.svg)](https://www.npmjs.com/package/html5-video-error-translator)
[![npm version](https://badge.fury.io/js/html5-video-error-translator.svg)](https://badge.fury.io/js/html5-video-error-translator)
[![downloads count](https://img.shields.io/npm/dt/html5-video-error-translator.svg)](https://www.npmjs.com/package/html5-video-error-translator)
[![size](https://packagephobia.com/badge?p=html5-video-error-translator)](https://packagephobia.com/result?p=html5-video-error-translator)
[![license](https://img.shields.io/npm/l/html5-video-error-translator.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/html5-video-error-translator/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/html5-video-error-translator/actions/workflows/testing.yml)

🔨 Translate HTML5 `<video>` error code to string

## Install

```bash
npm install html5-video-error-translator
```

## Usage

```javascript
var translate = require('html5-video-error-translator').translate;

var videoElement = document.querySelector('video#my-video');

// Native
videoElement.addEventListener('error', function (evt) {
    console.log(translate(evt);
});
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2016
