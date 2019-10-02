const express = require('express');
const router = express.Router();
var query  = require('../db_config/dataSourceDB');
var RS_sql = require('../SQL_Query/SQL_product')

router.get("/product",function(req,res){
    var sql = RS_sql.Sql_GetAll();
    query.QueryRead(res,sql);
});

router.get("/product/:id",function(req,res){
    var id = req.params.id;
    var sql = RS_sql.Sql_GetById(id);
    query.QueryRead(res,sql);
});
router.get("/produCategoryType/:id",function(req,res){
    var id = req.params.id;
    var sql = RS_sql.Sql_GetCategoryTypeById(id);
    query.QueryRead(res,sql);
});
module.exports = router;