var express = require('express');
var router = express.Router();
var importModels = require('../models/burger.js')['exportModels'];

	router.get('/', function(req,res){
		importModels.allBurgers(function(data){
				res.render('index', {burgers: data});
			})
		});

	router.post('/create', function(req,res){
		importModels.createBurgers(req.body.burger_name, function(data){
			res.redirect('/');
		});
	});

	router.put('/update', function(req,res){
		importModels.updateBurgers(req.body.id, function(data){
			res.redirect('/');
		});
	}); 

module.exports['exportRouter'] = router;
