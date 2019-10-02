const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var SQL_Gender =require('../SQL_Query/SQL_gender')
router.get("/gender",function(req,res){
    var sql = SQL_Gender.Sql_GetAll();
    query.QueryRead(res,sql);
});

module.exports = router;
