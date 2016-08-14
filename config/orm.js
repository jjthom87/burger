var thisConnection = require('./connection.js')['mysqlconnection'];

var burgerBuy = {

	selectAll: function(table, cb){
		thisConnection.query('SELECT * FROM ' + table, function(err,res){
			if (err){
				throw err
			}
			cb(res);
		})
	},
	insertOne: function(table, name, cb){
			thisConnection.query('INSERT INTO ' + table + ' SET ?',{
				burger_name: name,
				devoured: false
			}, function(err,res){
				if (err) {
					throw err
				}
				cb(res);
			})
	},
	updateOne: function(table, id, cb){
			thisConnection.query('UPDATE ' + table + ' SET ? WHERE ?',[{
				devoured: true},{id: id}], function(err,res){
					if (err){
						throw err
					}
					cb(res);
			})
	}
}

module.exports['exportAll'] = burgerBuy;