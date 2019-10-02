const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var SQL_District =require('../SQL_Query/SQL_district');

router.get("/District",function(req,res){
    var sql = SQL_District.Sql_GetAll();
    query.QueryRead(res,sql);
});

module.exports = router;
