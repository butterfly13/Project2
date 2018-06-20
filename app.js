const express        = require('express');
const bodyParser     = require('body-parser');
const flash          = require('connect-flash');
const cookieParser   = require('cookie-parser');
const session        = require('express-session');
const passport       = require('passport');
const methodOverride = require('method-override');
const validator      = require('express-validator')

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

// to set up view engine
app.set('view engine', 'hbs')
// set up static folder
 app.use(express.static('public'))

app.use(session({
  secret: 'Project2 express',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


app.use(require('./routes/index.js'))

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log('Listen on Port 4000');
})