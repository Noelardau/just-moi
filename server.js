const express = require('express')
const cors = require('cors')

const app = express()


// moteur de template
app.set('view engine','ejs')

// middleware
app.use('/assets',express.static('public'))
 app.use(cors())






// the core
app.get('/',(request,response)=>{
        response.render('pages/index')
})

// les pages appelé via ajax
app.get('/Acceuil',(req,rep)=>{
    rep.render('pages/home')

})
app.get('/Moi',(req,rep)=>{
    rep.render('pages/parcours')

})
app.get('/Projets',(req,rep)=>{
    rep.render('pages/projets')

})



app.listen(5050)
