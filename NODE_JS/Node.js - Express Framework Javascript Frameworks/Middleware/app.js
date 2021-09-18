var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  req.status="Logged time";
  next()
}


 var requestTime = function (req, res, next) {
   req.requestTime = req.status+Date.now()
   next()
}
//two middle ware functions loaded and exectes before default root
app.use(myLogger)
app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})
//here ends the request-res cycle
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
