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


const RS_Category = require("./routes/category");
app.use('/api',RS_Category);


const RS_CategoryType = require("./routes/categoryType");
app.use('/api',RS_CategoryType);


const RS_procest = require("./routes/product");
app.use('/api',RS_procest);


  
