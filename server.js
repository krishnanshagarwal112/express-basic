const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path');

// app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(res,req)=>{
    res.render('about')
})

app.listen(3500)