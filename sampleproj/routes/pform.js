const express = require('express')
const { route } = require('./api')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('Pform', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
  })
/*  router.get('/', (req, res) => {
    res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
  })
  */
  
router.post('/post', (req, res) => {
    const body = req.body
    res.json({
  
      confirmation: 'success',
      data: body
    })
  })
  module.exports = router