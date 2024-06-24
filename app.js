var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var flash   = require('express-flash');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts'); 
var loginRoutes = require('./routes/login');
var registerRoutes = require('./routes/register');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter); // use route posts di Express
app.use('/login', loginRouters);
app.use('/register', registerRouter);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Configurasi library session
app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});
// Setting folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

// Gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);


app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;