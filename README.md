# html5-video-error-translator

> Translate HTML5 <video> error code to string

## Install 

```
npm install html5-video-error-translator
```

## Usage

```javascript
var translator = require('html5-video-error-translator').translate;

// jQuery
$video.on('error', function (evt) {
    console.log(translate(evt);
});

// Pure
video.onerror = function (evt) {
    console.log(translate(evt);
}
```
