var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! checking middlewares')
})

app.listen(3000)