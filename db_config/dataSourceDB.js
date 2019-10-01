const express = require('express');
var config = require("./connectDB")
var mysql = require('mysql');
var con = mysql.createPool(config.ConnectDB);


var QueryRead = function(res,query){ 
            try {
                con.query(query, function (err, result, fields) {
                    if (err)
                    {
                        res.json({"Error" : true, 
                                  "message" : "ไม่สามารถดูรายนี้ได้ พยายามอีกครั้ง"});
                    }else{

                        res.json({"Error" : false, 
                                  "Result" : result});
                         }
                  });
              }
              catch(err) {
                res.json({"Error"   : true, 
                          "message"  : "ไม่สามารถดูรายนี้ได้ พยายามอีกครั้ง"});
              }      
}
var QueryCreate = function(res,query){ 
    try {
        con.query(query, function (err, result, fields) {
            if (err)
            {
                res.json({"Error" : true, 
                          "message" : "ไม่สามารถเพิ่มรายการได้ พยายามอีกครั้ง"});
            }else{

                res.json({"Error" : false, 
                           "message" : "เพิ่มรายการ Sucess!"});
                 }
          });
      }
      catch(err) {
        res.json({"Error"   : true, 
                  "message"  : "ไม่สามารถเพิ่มรายการได้ พยายามอีกครั้ง"});
      }      
}
var QueryUpdate = function(res,query){ 
    try {
        con.query(query, function (err, result, fields) {
            if (err)
            {
                res.json({"Error" : true, 
                          "message" : "ไม่สามารถแก้ไขรายการได้ พยายามอีกครั้ง"});
            }else{

                res.json({"Error" : false, 
                          "message" : "แก้ไขรายการสำเร็จ"});
                 }
          });
      }
      catch(err) {
        res.json({"Error"   : true, 
                  "message"  : "ไม่สามารถแก้ไขนี้รายการได้ พยายามอีกครั้ง"});
      }      
}
var QueryDelete = function(res,query){ 
    try {
        con.query(query, function (err, result, fields) {
            if (err)
            {
                res.json({"Error" : true, 
                          "message" : "ไม่สามารถลบรายได้ พยายาม อีกครั้ง"});
            }else{

                res.json({"Error" : false, 
                          "message" : "ลบรายการสำเร็จ"});
                 }
          });
      }
      catch(err) {
        res.json({"Error"   : true, 
                  "message"  : "ไม่สามารถลบรายได้ พยายาม อีกครั้ง"});
      }      
}
module.exports.QueryRead   =QueryRead 
module.exports.QueryCreate =QueryCreate
module.exports.QueryUpdate =QueryUpdate
module.exports.QueryDelete =QueryDelete