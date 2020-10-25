const express = require('express');
const app = express();

const db = require('./lib/mysql-test');

app.use(express.static('www'));

app.get('/api/hello', (request, response) => {
	response.send('Hello World! For: ' + request.query.name)
});

app.get('/api/listActors', (req, res) => {
	db.listActors(function (rows) {
		res.send(JSON.stringify(rows, null, 4));
	});
});

app.get('/api/listLotte', (req, res) => {
	db.listLotte(function (rows) {
		res.send(JSON.stringify(rows, null, 4));
	});
});

const server = app.listen(3033, function () {
	console.log(`listening on ${server.address().port}`);
});
