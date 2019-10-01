const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var Sql_CategoryType= require('../SQL_Query/SQL_categoryType');

router.get("/CategoryType",function(req,res){
    var sql = Sql_CategoryType.Sql_GetAll();
    query.QueryRead(res,sql);
});

router.get("/CategoryType/:id",function(req,res){
    var id = req.params.id;
    var sql = Sql_CategoryType.Sql_GetById(id);
    query.QueryRead(res,sql);
});

module.exports = router;