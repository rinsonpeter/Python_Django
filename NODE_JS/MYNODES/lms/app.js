var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var myConnection = require('express-myconnection')
var session = require('express-session')


var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var requestRouter = require('./routes/leaverequests');
var loginRouter = require('./routes/userlogin');
var logoutRouter = require('./routes/logout');
var requestListRouter = require('./routes/leaverequestlist');
var pendingRequesrRouter = require('./routes/pendingRequests');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(myConnection(mysql,{
      
  host: 'localhost',
  user: 'root',
  password : '123456',
  port : 3306, //port mysql
  database:'leavemanagement'

},'pool') //or single
);

app.use(session({
  secret: 'Auniquerandomtext',
  saveUninitialized: true,
  resave: true
}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//users
app.use('/', loginRouter);
app.use('/users',userRouter);
app.use('/leaverequests',requestRouter);
app.use('/logout',logoutRouter);
app.use('/leaverequestlist',requestListRouter);
app.use('/pendingrequests',pendingRequesrRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
