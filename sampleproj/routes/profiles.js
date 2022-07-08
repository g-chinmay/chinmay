
//PROFILE PAGE


const express = require('express')
const { dateString } = require('turbo360/dist/utils/Helper')
const { route } = require('./api')
const router = express.Router()


const profiles ={
    chinmay:{
        name: 'garikipati chinmay',
        images: '/images/apple.jpg',
        username: 'chinmay',
        dept: 'cse',
        role: 'student'
    },

    chany: {
        images: '/images/apple.jpg',
        username: 'chany',
        name: 'chany',
        dept: 'ece',
        role: ['intern','student','artist']
    },
    marie: {
        images: '/images/microsoft.jpg',
        name: 'marie',
        username: 'marie',
        dept: 'civil',
        role: ['intern','student']

    },
    terry: {
        images: '/images/google.jpg',
        name: 'lee terry',
        username: 'terry',
        dept: 'civile',
        role: ['student','intern'] 
    },

}
 router.post('/addprofile',(req, res) =>{
    const body= req.body
    // const role = req.body.role.split(', ')
   body['role'] = req.body.role.split(', ')
   profiles[body.username] = body
   res.redirect('/p/profile/'+body.username)
   /*
    res.json({
        confirmation: 'success',
        
        data: body
    })*/
 })

router.get('/:profile/:username',(req,res) => {
    const profile =req.params.profile
    const username = req.params.username
    const prof = profiles[username]

    if (prof == null){
        res.json({
            confirmation: 'fail',
            message: 'profile'+ username + 'not found'
        })
        return
    }
    const timestamp = new Date()
    prof.timestamp=timestamp.toString()
    /*

   res.json({
        confirmation: 'success',
      profile: prof
    })
*/
    res.render('profile', prof)
    })
    /*
  router.get('/profiles',(req, res) =>{
    const keys = Object.keys(profiles)
    const list = []
    keys.forEach(key => {
        list.push(profiles[key])
    })
    const timestamp = new Date()
    const data = {
        profiles: list,
        timestamp: timestamp.toString()
    }
        res.render('profiles',data)
    }
    )*/
  
    router.get('/profiles', (req, res) => {
        const keys = Object.keys(profiles)
        const list = []
        keys.forEach(key => {
            list.push(profiles[key])
        })
        const timestamp = new Date()
        
        const data = {
            profiles: list,
            timestamp: timestamp.toString()
        }
    
        res.render('profiles', data)
    })
    
    router.post('/createprofile', (req, res) => {
        const body = req.body
        body['role'] = req.body.role.split(', ')
    
        profiles[body.username] = body
        res.json({
            confirmation: 'success',
            data: profiles[body.username]
        })
        // res.redirect('/profile/'+body.username)
    })
    










module.exports = router