var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentification: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.use(middleware.requireAuthentification);

app.get('/about', function (req,res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port' + PORT + '!');
});