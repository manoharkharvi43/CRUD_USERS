const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')

const app = express()
const url = 'mongodb+srv://user43:user43@cluster44.lcqv6.mongodb.net/Add_User?retryWrites=true&w=majority'
mongoose.connect(url ,{ useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('connected')
})
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
      next();
    });
  
app.use(express.json())
app.use('/' , route)



app.listen(4000)