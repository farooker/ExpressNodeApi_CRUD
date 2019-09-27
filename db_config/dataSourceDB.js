const express = require('express');
const router = express.Router();
var config = require("../db_config/connectDB")
var mysql = require('mysql');
var con = mysql.createPool(config.ConnectDB);