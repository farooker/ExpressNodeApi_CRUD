const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var SQL_Store =require('../SQL_Query/SQL_store')

router.get("/store",function(req,res){
    var sql = SQL_Store.Sql_GetAll();
    query.QueryRead(res,sql);
});

module.exports = router;
