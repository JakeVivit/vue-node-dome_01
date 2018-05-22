var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var products = require('../models/good.js');

//连接数据库；
mongoose.connect('mongodb://my_root:zhang4601592@47.92.73.203:27017/admin');

//监听数据库连接

mongoose.connection.on("connected",function () {
  console.log('MongoDB connected success');
})

mongoose.connection.on("erroe",function () {
  console.log('MongoDB connected fail');
})

mongoose.connection.on("disconnected",function () {
  console.log('MongoDB connected disconnected');
})

//实现路由

router.get('/', function (req, res, next) {
  // res.send('goods is success');
  products.find({}, function (err,doc) {
    if(err){
      res.json({
        status:1,
        msg:err.message
      })
    }else {
      res.json({
        status:0,
        msg:"",
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
})


//输出
module.exports = router;
