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
            return 'TRANSLATION_FAILED';
        }

        switch (evt.target.error.code) {
            case evt.target.error.MEDIA_ERR_ABORTED:
                return 'MEDIA_ERR_ABORTED';

            case evt.target.error.MEDIA_ERR_NETWORK:
                return 'MEDIA_ERR_NETWORK';

            case evt.target.error.MEDIA_ERR_DECODE:
                return 'MEDIA_ERR_DECODE';

            case evt.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return 'MEDIA_ERR_SRC_NOT_SUPPORTED';

            default:
                return 'MEDIA_ERR_UNKNOWN';
        }
    }
};
