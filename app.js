const express        = require('express');
const bodyParser     = require('body-parser');
const flash          = require('connect-flash');
const cookieParser   = require('cookie-parser');
const session        = require('express-session');
const passport       = require('passport');
const methodOverride = require('method-override');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));




// to set up view engine
app.set('view engine', 'hbs')

app.use(session({secret: 'Project2 express'}));
app.use(flash());

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


app.use(require('./routes/index.js'))


app.listen(3000, function(){
    console.log('Listen on Port 3000');
})