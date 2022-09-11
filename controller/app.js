const express=require('express');
const app=express();
const router=require('./routes/routes')
const mongoose=require('mongoose')
app.use(express.json());
app.use(express.urlencoded());
const cors=require('cors')
app.use(cors())

mongoose.connect('mongodb://localhost:27017/tutorial').then(()=>{console.log("Success in connecting to database")})

app.use(express.static('public'))


app.use('/',router)

/*app.post('/test',(req,res)=>{
    console.log(req.body.rating)
    res.send("OK")
})*/

app.listen(4500,()=>{
    console.log("just hit port 4500")
})