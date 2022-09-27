const express=require('express');
const app=express();
const router=require('./routes/routes')
const mongoose=require('mongoose')
app.use(express.json());
app.use(express.urlencoded());
const cors=require('cors')
app.use(cors())
const hbs=require('express-handlebars')
const dotenv=require('dotenv').config();
const port=process.env.PORT || 4500;

mongoose.connect(process.env.connectionString2).then(()=>{console.log("Success in connecting to database")})

app.engine('hbs',hbs.engine({
    extname:'hbs',
    //defaultLayout:'default',
    partialsDir:__dirname+ "/views/partials/",
    layoutsDir:__dirname+ '/views/'
}))
app.set('view engine', 'hbs');
//app.set('views','./views');


app.use('/',router)
app.use(express.static('public'))

/*app.post('/test',(req,res)=>{
    console.log(req.body.rating)
    res.send("OK")
})*/

app.listen(port,()=>{
    console.log(`just hit port ${port}`)
})