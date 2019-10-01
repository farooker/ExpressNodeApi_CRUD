const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');

router.get("/product",function(req,res){
    var sql = getsql.Sql_GetAll();
    query.QueryRead(res,sql);
});

router.get("/product/:id",function(req,res){
    var id = req.params.id;
    var sql = getsql.Sql_GetById(id);
    query.QueryRead(res,sql);
});

module.exports = router;