const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var SQL_subDistrict =require('../SQL_Query/SQL_subDistrict');

router.get("/Subdistrict",function(req,res){
    var sql = SQL_subDistrict.Sql_GetAll();
    query.QueryRead(res,sql);
});

module.exports = router;
