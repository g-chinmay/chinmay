// Full Documentation - https://docs.turbo360.co
const express = require('express')
const { route } = require('./api')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */

  //DYNAMIC DATA


// 1
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})
 
//2
router.get('/test', (req,res) => {
  res.json({
    data: 'this is a test response'
  })
})

//3
/* router.get('/:path', (req,res) => {
  const path = req.params.path
  res.json({
       data: path
  })
})
*/
//4
/*router.get('/:profile/:username',(req,res) => {
  const profile=req.params.profile
  const username = req.params.username
  res.json({
    profile: profile,
    username: username
  })
  })
*/
//5
 /*
router.get('/query',(req, res) => {
  res.json({
    query: 'this'
  })
})
*/
//6
/*
router.get('/query',(req,res) =>
{
  const sid =req.query.sid
  const department = req.query.department
  res.json({
    sid: sid,
    department: department
  })

})
*/
//6
router.get('/query',(req, res) => {
  const name=req.query.name
  const occupation = req.query.occupation
  const data = {
    name: name,
    occupation: occupation
  }
  res.render('basic', data)
  //res.json({
    //name: name,
    //occupation: occupation
  //})

})




module.exports = router
