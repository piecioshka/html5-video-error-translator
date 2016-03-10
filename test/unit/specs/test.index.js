'use strict';

var Translator = require('../../../index');
var Creator = require('../helpers/event-creator');

describe('General', function () {
    it('should returns failed when pass not an object', function () {
        expect(function () {
            return Translator.translate({});
        }).toThrow();
        expect(function () {
            return Translator.translate({ target: {} });
        }).toThrow();
        expect(function () {
            return Translator.translate({ target: { error: {} } });
        }).toThrow();
    });

    it('should returns proper string when put typical event', function () {
        expect(Translator.translate(Creator.create(1))).toContain('MEDIA_ERR_ABORTED');
        expect(Translator.translate(Creator.create(2))).toContain('MEDIA_ERR_NETWORK');
        expect(Translator.translate(Creator.create(3))).toContain('MEDIA_ERR_DECODE');
        expect(Translator.translate(Creator.create(4))).toContain('MEDIA_ERR_SRC_NOT_SUPPORTED');
        expect(Translator.translate(Creator.create(100))).toContain('MEDIA_ERR_UNKNOWN (100)');
    });
});
