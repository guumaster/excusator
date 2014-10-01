#!/usr/bin/env node

var excusame = require('../lib');
var argv = require('minimist')(process.argv.slice(2));

console.log( (argv.s || argv.speak ) ? excusame.say() : excusame.excusa() );
