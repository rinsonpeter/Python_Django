var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)


app.get('/', function (req, res) {
  console.log("inside get,checking looger Middleware")  
  res.send('Hello World! used logger as middleware check console')
})

app.listen(4000)