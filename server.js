//1. dependencies
var express = require('express');

//custom modules
var routes = require('./routes');


//2. db connection


//3. app instantiation
var app = express();


//4. app configuration (app.set)
app.set('views', '/views');
app.set('view engine', 'jade');


//5. middleware definition (app.use)


//6. routes
app.use('/', routes);


//catch-all route
app.all('*', function(req, res) {
    res.status(404).send('this is the Page Not Found message.');
});


//7. app server start on host and port
app.listen(3000, function() {
    console.log('the server is listening on port 3000');
});
