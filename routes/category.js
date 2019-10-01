const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var getsql = require('../SQL_Query/SQL_category');

router.get("/Category",function(req,res){
    var sql = getsql.Sql_GetAll();
    query.QueryRead(res,sql);
});

router.get("/Category/:id",function(req,res){
    var id = req.params.id;
    var sql = getsql.Sql_GetById(id);
    query.QueryRead(res,sql);
});

router.post("/CategoryAdd/",function(req,res){
    let id = req.param('id', null); 
    let name = req.param('name', null); 
    let picture =req.param('picture', null); 
    var sql = getsql.Sql_insert(id,name,picture);
    query.QueryCreate(res,sql);
});



module.exports = router;
