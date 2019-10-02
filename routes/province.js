const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var SQL_Province =require('../SQL_Query/SQL_province')

router.get("/province",function(req,res){
    var sql = SQL_Province.Sql_GetAll();
    query.QueryRead(res,sql);
});


module.exports = router;
