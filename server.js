const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");
const app = express();
const connectDB = require('./server/database/connection')
dotenv.config({path: `config.env`})
const {PORT = 8080} = process.env


//logs 
app.use(morgan('tiny'));

connectDB();

//body parser 
app.use(bodyparser.urlencoded({extended:true}));

//view engine
app.set("view engine","ejs")

//css/assets
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/add-user',(req,res)=>{
    res.render('add_user')
})

app.get('/update-user',(req,res)=>{
    res.render('update_user')
})


app.listen(3000,()=>{console.log(`server running on http://localhost:${PORT}`)});