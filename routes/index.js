var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('test')
  res.render('index', { title: 'Liz - Home' })
})

router.get('/contact', function (req, res, next) {
  console.log('called contact render')
  res.render('contact', { title: 'Contact Me!' })
})

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me!' })
})

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Project List' })
})

module.exports = router
