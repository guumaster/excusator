var wav = require('wav');
var request = require('request');
var Speaker = require('speaker');
var querystring = require('querystring');
var reader = new wav.Reader();

var VOICERSS_URL = 'http://api.voicerss.org/';
var params = {
    'hl': 'es-es',
    'f': '8khz_8bit_mono',
    'c': 'wav'
};

module.exports = function(key){
    return new VoiceRSS(key);
};


VoiceRSS = function(key) {
    this.key = key;
};

VoiceRSS.prototype.speak = function(src, options) {

        var endpoint = this.url(src);

        request(endpoint).pipe(reader);

        reader.on('format', function (format) {
            // the WAVE header is stripped from the output of the reader
            reader.pipe(new Speaker(format));
        });

};
VoiceRSS.prototype.url = function (src, options){
    var p = params;
    p.src = src;
    p.key = this.key;
    return VOICERSS_URL + '?' + querystring.stringify(p);
};

