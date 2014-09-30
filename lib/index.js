var util = require('util');
var data = require('./excusas');

function sample(arr) {
    return  arr[Math.floor(Math.random() * arr.length)];
}

module.exports = function() {
    return util.format('%s %s %s', sample(data.START), sample(data.MIDDLE), sample(data.END) );
};
