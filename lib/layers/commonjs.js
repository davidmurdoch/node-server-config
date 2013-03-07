/*jslint node:true nomen:true white:true eqeq:true */
'use strict';

/** deps */
var path = require('path'),
	browserify = require('browserify');

module.exports = function(options) {
	var scripts = options.scripts.concat,
		b = browserify(options.scripts.concat);

	return function commonjs(req, res, next) {
		// TODO
		next();
	};
};
