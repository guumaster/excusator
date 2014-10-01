var util = require('util');
var data = require('./excusas');
var speaker = require('./voice')('35c1a757836a4a5ca0d35a6ed462b028'); // TODO: request api key from parameter

function sample(arr) {
    return  arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {

    excusa: function() {
        return util.format('%s %s %s', sample(data.START), sample(data.MIDDLE), sample(data.END) );
    },
    say: function() {
        var excusa =  this.excusa();
        speaker.speak(excusa);
        return excusa;
    }
};
