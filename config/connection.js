var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgerz_db'
});

module.exports['mysqlconnection'] = connection;
