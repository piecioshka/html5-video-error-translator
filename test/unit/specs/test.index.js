'use strict';

var Translator = require('../../../index');
var Creator = require('../helpers/event-creator');

describe('General', function () {
    it('should returns failed when pass not an object', function () {
        expect(Translator.translate({})).toEqual('TRANSLATION_FAILED');
        expect(Translator.translate({ target: {} })).toEqual('TRANSLATION_FAILED');
        expect(Translator.translate({ target: { error: {} } })).toEqual('TRANSLATION_FAILED');
    });

    it('should returns proper string when put typical event', function () {
        expect(Translator.translate(Creator.create(1))).toEqual('MEDIA_ERR_ABORTED');
        expect(Translator.translate(Creator.create(2))).toEqual('MEDIA_ERR_NETWORK');
        expect(Translator.translate(Creator.create(3))).toEqual('MEDIA_ERR_DECODE');
        expect(Translator.translate(Creator.create(4))).toEqual('MEDIA_ERR_SRC_NOT_SUPPORTED');
        expect(Translator.translate(Creator.create(100))).toEqual('MEDIA_ERR_UNKNOWN');
    });
});
