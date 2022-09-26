const express=require('express');
const app=express();
const router=express.Router();
const {getAll,getALlRated,search}=require('../controller/controller')
const {rate}=require('../controller/controller')
const {add}=require('../controller/controller')
const {bamenda}=require('../controller/controller')
const {buea}=require('../controller/controller')
const {douala}=require('../controller/controller')
const {yaounde}=require('../controller/controller')
const {bafoussam}=require('../controller/controller')
const {calculation}=require('../controller/controller')

//render routes
router.get('/',(req,res)=>{
    res.render('main')
}).get('/Bamenda2',(req,res)=>{
    res.render('bamenda',{layout:'bamenda'})
}).get('/yaounde2',(req,res)=>{
    res.render('yaounde',{layout:'yaounde'})
}).get('/douala2',(req,res)=>{
    res.render('douala',{layout:'douala'})
}).get('/buea2',(req,res)=>{
    res.render('buea',{layout:'buea'})
}).get('/result',(req,res)=>{
    res.render('search_results',{layout:'search_results'})
})

///other routes(fetch)
router.get('/bamenda',bamenda).get('/buea',buea)
router.get('/douala',douala).get('/bafoussam',bafoussam).get('/ynde',yaounde).get('/yaounde',yaounde)
router.get('/getAllRated',getALlRated).get('/getAll',getAll)
router.get('/add',(req,res)=>{
    res.sendFile('test.html', {root:'./'})
})
router.get('/search',search)


////boundary for post requests
router.post('/Cal',calculation)
router.post('/add',add)
router.post('/test',rate)


module.exports=router;