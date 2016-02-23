'use strict';

module.exports = {
    /**
     * Return error description, when put HTML5 Video error object.
     *
     * @param {Object} evt
     * @returns {string}
     */
    translate: function (evt) {
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
