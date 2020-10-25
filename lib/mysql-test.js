'use strict'

const mysql = require('mysql')

function ListActors(fncSuccess) {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'user',
		password: 'abc123',
		database: 'sakila'
	})
	
	connection.connect()
	
	connection.query('SELECT * FROM actor', function (err, rows, fields) {
		if (err) throw err

		fncSuccess(rows);
	})
	
	connection.end()
}

function ListLotte(fncSuccess) {
	const connection = OpenConnection();

	ListTable('lotte', connection, fncSuccess);
}

function OpenConnection() {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'user',
		password: 'abc123',
		database: 'sakila'
	})
	
	connection.connect()

	return connection;
}

function ListTable(tableName, connection, fncSuccess) {
	connection.query(`SELECT * FROM ${tableName}`, function (err, rows, fields) {
		if (err) throw err

		fncSuccess(rows);

		connection.end();
	})
}

module.exports = {
	listActors: ListActors,
	listLotte: ListLotte
}
