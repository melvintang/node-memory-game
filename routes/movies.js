var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

// READ ROUTES

// read all movies' details: route #1
router.get('/', function (req, res) {
  res.send('all movies details')
})

// read one movie details: route #2
router.get('/:id', function (req, res) {
  res.send('movie\'s ' + req.params.id + ' details')
})

// CREATE ROUTES: create new movie: route #3
router.get('/new', function (req, res) {
  res.send('new movie form')
})
// post new movie
router.post('/', function (req, res) {
  res.send('post movie form')
})

// UPDATE ROUTES: updat: get/movies/edit
router.get('/:id/edit', function (req, res) {
  res.send('edit movie\'s ' + req.params.id + ' details')
})
// put movies 1
router.put('/:id', function (req, res) {
  res.send('edit movie' + req.params.id)
})

// DELETE ROUTESs
router.delete('/:id', function (req, res) {
  res.send('delete movie' + req.params.id)
})

module.exports = router
