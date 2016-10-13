var express = require('express')
var router = express.Router()

// setting the route to homepage
// app.get('/path-name', callback(request, response)) NO
// use router.get instead

router.get('/', function (req, res, next) {
  res.render('index', {
    name: 'Glen'
  })
})

router.get('/about', function (req, res) {
  res.render('about', {
    name: 'Glen'
  })
})

router.get('/contact', function (req, res) {
  res.render('contact', {
    name: 'Glen'
  })
})

module.exports = router
