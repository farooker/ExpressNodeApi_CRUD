const express = require('express');
const router = express.Router();

// var config = require("../db_config/connectDB")
// var mysql = require('mysql');
// var con = mysql.createPool(config.ConnectDB);

var query  = require('../db_config/dataSourceDB');


/*
router.get("/",function(req,res){

    crawler.userInfo(userID, accessToken, function (error, response) {
        res.json({"Error" : false, 
        "Message" : "Success",
        "Result" : response});
              
});
*/

router.get("/",function(req,res){

     var sql = "SELECT * FROM `categories`";
     query .executeQuery(res,sql);
});

module.exports = router;
