const express = require('express');
const router = express.Router();
var config = require("../db_config/connectDB")
var mysql = require('mysql');

var con = mysql.createPool(config.ConnectDB);
var crawler = require('../db_config/dataSourceDB');



router.get("/",function(req,res){

    crawler.userInfo(userID, accessToken, function (error, response) {
        res.json({"Error" : false, 
        "Message" : "Success",
        "Result" : response});
              
});
    /*
    con.query("SELECT * FROM `user`", function (err, result, fields) {
          if (err) throw err;
          res.json({"Error" : false, 
                    "Message" : "Success",
                    "Result" : result});
        });
    */
});

module.exports = router;
