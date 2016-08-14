var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Ntho1mas',
	database: 'burgerz_db'
});

module.exports['mysqlconnection'] = connection;