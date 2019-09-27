const express = require('express');
const router = express.Router();
var config = require("./connectDB")
var mysql = require('mysql');
var con = mysql.createPool(config.ConnectDB);


var executeQuery = function(res,query){ 
            try {
                con.query(query, function (err, result, fields) {
                    if (err)
                    {
                        res.json({"Error" : true, 
                                  "Process": "! UnSucess",
                                  "Result" : "ไม่สามารถทำรายการได้ พยายาม อีกครั้ง"});
                    }else{

                        res.json({"Error" : false, 
                                 "Process": "Success",
                                 "Result" : result});
                         }
                  });
              }
              catch(err) {
                res.json({"Error"   : true, 
                          "Process" : "! UnSucess",
                          "Result"  : "ไม่สามารถ ดำเนินรายการได้"});
              }      
}
module.exports.executeQuery =executeQuery 