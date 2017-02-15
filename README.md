# html5-video-error-translator

> Translate HTML5 <video> error code to string

## Install 

```
$ npm install html5-video-error-translator
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

Use `Jasmine` for unit test:

```
$ npm test
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
