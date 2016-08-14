var importOrm = require('../config/orm.js')['exportAll'];
var dbTable = 'burgers';

var exportOrm = {
	allBurgers: function(cb){
		importOrm.selectAll(dbTable, cb)
	}, 
	createBurgers: function(name, cb){
		importOrm.insertOne(dbTable, name, cb)
	},
	updateBurgers: function(id, cb){
		importOrm.updateOne(dbTable, id, cb);
	}
};	

module.exports['exportModels'] = exportOrm;