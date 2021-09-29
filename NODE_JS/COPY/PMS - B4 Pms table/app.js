var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var flash = require('express-flash');
var session = require('express-session');
var connection  = require('express-myconnection'); 


var mysql = require('mysql');

//var connection  = require('./lib/db');
//var dbConn  = require('./lib/db');

var empRouter = require('./routes/employees');
var usersRouter = require('./routes/users');

var app = express();

app.use(
  connection(mysql,{
  
  host: 'localhost',
  user: 'root',
  password : 'rinson@123',
  port : 3306, //port mysql
  database:'mycompany'

  },'pool') //or single
);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(flash());



// app.use(session({ 
//     cookie: { maxAge: 60000 },
//     store: new session.MemoryStore,
//     saveUninitialized: true,
//     resave: 'true',
//     secret: 'secret'
// }))

app.use('/employees', empRouter);
app.use('/users', usersRouter);

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
  res.render('pages/error',{message: err.message,
    error: err});
  
});

module.exports = app;