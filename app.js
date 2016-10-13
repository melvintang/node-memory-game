// import express / borrowing a function of express
var express = require('express')
console.log(express)

// instantiating the express server
// All methods under express() can be used under app
var app = express()
var port = 4000

// set all the routes
var static_routes = require('./routes/pages')
var movie_routes = require('./routes/movies')
var users_routes = require('./routes/users')
// var user_routes = require('./routes/users')
// var posts_routes = require('./routes/posts')


// app.use is for middleware: Every requests that come in are under the public ('/public') folder
app.use(express.static(__dirname + '/public'));

// running express with ejs
// setting = view engine to go to views folder to use ejs files in rendering
// hence, res.render (index) => index.ejs inside VIEWS folder
app.set('view engine', 'ejs')

// add middleware to handle all static routes
app.use('/', static_routes)
// add middleware to handle all movie routes
app.use('/movies', movie_routes)
// add middleware to handle all user routes
app.use('/users', users_routes)
// express use connect middleware systems
// middleware for all requests: app.get listening to request at url = '/':
// go to webpage, use dev tool, network, go to header
  app.get('/', function(req, res) {
  // res.send('homepage')
  // render view means to output a HTML file and send a HTML response
  // looks for 'index.ejs' under views folder due to 'view engine'
  // app.get('view engine')
  res.render('index', {name: 'Pokemon Memory Game'})
})


// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
