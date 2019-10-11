const express = require('express');
const router = express.Router();

router.get("/login",function(req,res){
    var sql = SQL_Gender.Sql_GetAll();
    query.QueryRead(res,sql);
});

router.get("/login",function(req,res){
    var sql = SQL_Gender.Sql_GetAll();
    query.QueryRead(res,sql);
});


module.exports = router;