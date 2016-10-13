var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// read all users' details: route #1
router.get('/', function (req, res) {
  res.send('all users details')
})

// read one user details: route #2
router.get('/:id', function (req, res) {
  res.send('user\'s ' + req.params.id + ' details')
})

// CREATE ROUTES: create new user: route #3
router.get('/new', function (req, res) {
  res.send('new user')
})
// post new movie
router.post('/', function (req, res) {
  res.send('post user form')
})

// UPDATE ROUTES: updat: get/movies/edit
router.get('/:id/edit', function (req, res) {
  res.send('edit user\'s ' + req.params.id + ' details')
})
// put movies 1
router.put('/:id', function (req, res) {
  res.send('edit user' + req.params.id)
})

// DELETE ROUTESs
router.delete('/:id', function (req,   res) {
  res.send('delete user' + req.params.id)
})

module.exports = router
