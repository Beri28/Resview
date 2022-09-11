const express=require('express');
const app=express();
const router=express.Router();
const {getAll}=require('../controller/controller')
const {rate}=require('../controller/controller')
const {add}=require('../controller/controller')
const {bamenda}=require('../controller/controller')
const {buea}=require('../controller/controller')
const {douala}=require('../controller/controller')
const {yaounde}=require('../controller/controller')
const {bafoussam}=require('../controller/controller')
const {calculation}=require('../controller/controller')


router.get('/bamenda',bamenda).get('/buea',buea)
router.get('/douala',douala).get('/bafoussam',bafoussam).get('/ynde',yaounde)
router.get('/yaounde',yaounde)
router.get('/getAll',getAll)
router.get('/add',(req,res)=>{
    res.sendFile('test.html', {root:'./'})
})
router.post('/add',add)
router.post('/test',rate)
router.get('/Cal',calculation)

module.exports=router;