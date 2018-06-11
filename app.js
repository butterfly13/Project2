const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// to set up view engine
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}));

// Homepage
app.get('/', function(req, res){
    res.render('app/index');
});

app.get('/:name', function(req, res){
    res.send(`Hello ${req.params.name}`);
})



app.listen(3000, function(){
    console.log('Listen on Port 3000');
})