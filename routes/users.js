var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = require('../modules/modelHead')();
var React = require('react');
var ReactDOM = ('react-dom');
var path = require('path');
var fs= require("fs");
var Component =require ('react').Component;

var contents= fs.readFileSync('./build/contracts/Coin.json');
var purchase = JSON.parse(contents);



/* GET users listing. */
router.get('/', function(req, res) {
	
	res.render('index/index');
});


router.get('/home', function(req, res, next) {
	
	let sql = 'select * from parts;';
	sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
	}).then(function(rs) {
		res.send(rs);
	}).catch(function(err) {
		console.log(err);
	})
});

router.get('/details', function(req,res,next){
	
	res.render('index/details');
});

router.post('/detail', function(req, res, next){
	
	let sql = 'select * from parts where partsId = :partsId;';
	sequelize.query(sql, {
		replacements: { partsId: req.body.partsId },
		type: sequelize.QueryTypes.SELECT
	}).then(function(rs){
		res.send(rs);
	}).catch(function(err){
		console.log(err);
	})
});

router.post('/buy', function(req, res, next){
	
	let sql = 'update shop.parts set surplusstock = surplusstock - :num where partsId = :partsId;';
	let insertsql = 'insert into shop.shops (merchantId, partsId, num, amount, useraccount, txHash, blockNum) value (:merchantId,:partsId,:num,:amount,:useraccount,:txHash,:blockNumber); ';
	sequelize.query(sql, {
		replacements: {
			partsId: req.body.partsId,
			num : req.body.num,
		},
		type: sequelize.QueryTypes.UPDATE
		
	}).then(function(rs){
		sequelize.query(insertsql, {
			replacements: {
				merchantId : req.body.merchantId,
				partsId : req.body.partsId,
				num : req.body.num,
				amount : req.body.amount,
				useraccount : req.body.userId,
				txHash : req.body.txHash,
				blockNumber : req.body.blockNumber
			},
			type: sequelize.QueryTypes.INSERT
				
		});
		res.send({message: 'ok'});
	}).catch(function(err){
		console.log(err);
	})
})

router.get('/success', function(req,res,next){
	res.render("index/success");
})


router.post('/json', function(req,res,next){
	res.send(purchase);
})

router.post('/account', function(req,res){
	let sql = 'select merchantaccount, parts.merchantId, price from merchant, parts where merchant.merchantid = parts.merchantId and parts.partsId = :partsId;';

	sequelize.query(sql, {
		replacements: { 
			partsId: req.body.partsId 
		},
		type: sequelize.QueryTypes.SELECT
		
	}).then( function(rs){
		res.send(rs);
	}).catch(function(err){
		console.log(err);
	})
})

router.get('/shops', function(req,res,next){
	res.render("index/purchase");
})

router.post('/purchase', function(req, res, next) {
	let sql = 'select id, num, amount, useraccount, createTime, name, brand, txHash from shops, parts where shops.partsId = parts.partsId order by '+req.body.id +' ' +req.body.sort+' limit :limit,:maxlimit';
	sequelize.query(sql, {
		replacements: { 
			limit: Number(req.body.limit),
			maxlimit: Number(req.body.maxlimit)
		},
		type: sequelize.QueryTypes.SELECT
	}).then(function(rs) {
		res.send(rs);
	}).catch(function(err) {
		console.log(err);
	})
});

router.post('/count', function(req,res){
	let sql = 'select count(*) as count from shops;';

	sequelize.query(sql, {
		type: sequelize.QueryTypes.SELECT
		
	}).then( function(rs){
		res.send(rs);
	}).catch(function(err){
		console.log(err);
	})
})
         

module.exports = router;