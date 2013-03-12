/*jslint node:true nomen:true white:true eqeq:true */
'use strict';

/** deps */
var path = require('path'),
	webmake = require('webmake');

module.exports = function(options) {
	var scripts = options.scripts.concat,
		sourceMap = options.scripts.sourceMap;

	return function commonjs(req, res, next) {
		var url = req.url.slice(1);
		if (-1 != scripts.indexOf(url)) {
			webmake(path.join(options.root, url), { sourceMap: sourceMap }, function (err, content) {
				if (err) {
					next(500);
					return;
				}

				res.type('js');
				res.end(content);
			});
		}
		else {
			next(null, req, res);
		}
	};
};
