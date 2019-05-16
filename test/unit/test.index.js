'use strict';

var Creator = require('../helpers/event-creator');
var translate = require('../../index').translate;

describe('General', function () {
    it('should returns failed when pass not an object', function () {
        expect(function () {
            return translate({});
        }).toThrow();
        expect(function () {
            return translate({ target: {} });
        }).toThrow();
        expect(function () {
            return translate({ target: { error: {} } });
        }).toThrow();
    });

    it('should returns proper string when put typical event', function () {
        expect(translate(Creator.create(1))).toContain('MEDIA_ERR_ABORTED');
        expect(translate(Creator.create(2))).toContain('MEDIA_ERR_NETWORK');
        expect(translate(Creator.create(3))).toContain('MEDIA_ERR_DECODE');
        expect(translate(Creator.create(4))).toContain('MEDIA_ERR_SRC_NOT_SUPPORTED');
        expect(translate(Creator.create(100))).toContain('MEDIA_ERR_UNKNOWN (100)');
    });
});
