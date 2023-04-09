const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path');

// app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3500)