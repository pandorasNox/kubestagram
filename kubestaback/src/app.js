var path = require('path')
var fs = require('fs');
var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { uploadDir } = require('./config')

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
// ... not in use here ...

//app middleware setup
console.log("CORS_ALL:", process.env.CORS_ALL === "true")
if(process.env.CORS_ALL === "true") {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app middleware ROUTING setup
app.use('/', indexRouter);
app.use('/static', express.static(uploadDir));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log("")
  console.log("err:", err.message)
  console.log("")

  // render the error page
  res.status(err.status || 500);
  res.send({error:err.message});
});

console.log("done")

module.exports = app;
