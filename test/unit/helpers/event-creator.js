'use strict';

module.exports = {
    create: function (code) {
        return {
            target: {
                error: {
                    code: code,

                    MEDIA_ERR_ABORTED: 1,
                    MEDIA_ERR_NETWORK: 2,
                    MEDIA_ERR_DECODE: 3,
                    MEDIA_ERR_SRC_NOT_SUPPORTED: 4
                }
            }
        };
    }
};
