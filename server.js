const express = require('express')
const bodyParser  = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST ,DELETE, PUT");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
});

app.listen(3000, () => {
  console.log('Start server at port 3000.');
  console.log('run==>http://localhost:3000/')
})

const middleware = (req, res, next) => {
  /* ตรวจสอบว่า authorization คือ Boy หรือไม่*/
     if(req.headers.authorization === "Boy")
        next(); //อนุญาตให้ไปฟังก์ชันถัดไป
     else
        res.send("ไม่อนุญาต")
  }; 
  app.get("/", middleware, (req, res) => { //เพิ่ม middleware ขั้นกลาง
     res.send("ยอดเงินคงเหลือ 50");
  });
/*
const loginMiddleware = (req, res, next) => {
  let user = req.param('username', null); 
  let pass = req.param('password', null); 

  if(user === "xxx" &&  pass === "123") next();
   else res.send("Wrong username and password") 
}
app.post("/login",loginMiddleware,(req, res) => {
  res.send("Login success");
});
*/
/*
const RS_Category = require("./routes/category");
app.use('/api',RS_Category);

const RS_CategoryType = require("./routes/categoryType");
app.use('/api',RS_CategoryType);

const RS_procest = require("./routes/product");
app.use('/api',RS_procest);

const RS_ganeder= require("./routes/gender");
app.use('/api',RS_ganeder);

const RS_store= require("./routes/store");
app.use('/api',RS_store);

const RS_provice= require("./routes/province");
app.use('/api',RS_provice);

const RS_district= require("./routes/district");
app.use('/api',RS_district);

const RS_SUBdistrict= require("./routes/subDistrict");
app.use('/api',RS_SUBdistrict);
*/