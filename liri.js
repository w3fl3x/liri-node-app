// requires to read and set any environment variables for dotenv package
require('dotenv').config();

var keys = require('./keys.js');
var colors = require('colors');
var axios = require('axios');
var fs = require('fs');
var spotify = require('node-spotify-api');
var moment = require('moment');

var spotify = new spotify(keys.spotify);

var liriSearch = process.argv[2];
var liriTerm = process.argv.slice(3).join(' ');