'use strict';

module.exports = {
    /**
     * Return error description, when put HTML5 Video error object.
     *
     * @param {Object} evt Event object, which is payload of `onerror` event on HTML5 Video tag.
     * @returns {string}
     */
    translate: function (evt) {
        if (!evt || !evt.target || !evt.target.error || !evt.target.error.code) {
            throw new Error('Translation failed');
        }

        var code = evt.target.error.code;

        switch (code) {
            case evt.target.error.MEDIA_ERR_ABORTED:
                return "MEDIA_ERR_ABORTED (1) The fetching process for the media resource was aborted by the user agent at the user's request.";

            case evt.target.error.MEDIA_ERR_NETWORK:
                return 'MEDIA_ERR_NETWORK (2) A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.';

            case evt.target.error.MEDIA_ERR_DECODE:
                return 'MEDIA_ERR_DECODE (3) An error of some description occurred while decoding the media resource, after the resource was established to be usable.';

            case evt.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return 'MEDIA_ERR_SRC_NOT_SUPPORTED (4) The media resource indicated by the src attribute was not suitable.';

            default:
                return 'MEDIA_ERR_UNKNOWN (' + code + ')';
        }
    }
};
