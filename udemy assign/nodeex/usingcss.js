const express=require('express')
const path = require('path')
const hoganMiddleware = require('hogan-middleware')
const app=express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','mustache')
app.engine('mustache', hoganMiddleware.__express)          //app.engine('mustache',require('hogan-middleware').__express) - then no need of const hoganMIddleware
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req, res, next) => 
{
    res.send('not a json output')
}
)
app.get('/json',(req,res,next) => 
{
    const data = 
    {
        greeting: 'json object'

    }
    res.json(data)
}
)
app.get('/bgimage',(req,res,next) => {
    res.render('bgimage', null)
})
app.listen(3000)
