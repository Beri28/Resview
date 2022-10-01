const restaurant=require('../model/rest')
const express=require('express');
const { $where } = require('../model/rest');
const app=express();
app.use(express.json());
app.use(express.urlencoded());

const getALlRated=async (req,res,next)=>{
    try {
    var All=await restaurant.find({rated:true},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!All){
        res.send("No items")
    }
    else{
        res.send(All)
    }
}

const getAll=async (req,res,next)=>{
    try {
    var All=await restaurant.find({},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!All){
        res.send("No items")
    }
    else{
        res.send(All)
    }
}

const rate=async (req,res,next)=>{
    let rating2;
    console.log(req.body)
    console.log(req.body.Restaurant_name)
    console.log(req.body.Location_one)
    try {
       if(req.body.rating=='5 stars'){
       var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{fiveStar:1}})
       
        }
        else if(req.body.rating=='4 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{fourStar:1}})
       
        }
        else if(req.body.rating=='3 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{threeStar:1}})
       
        }
        else if(req.body.rating=='2 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{twoStar:1}})
       
        }
        else if(req.body.rating=='1 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{oneStar:1}})
       
        }
        else if(req.body.rating=='-1 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name.trim(),locationOne:req.body.Location_one.trim()},{$inc:{negOneStar:1}})
       
        }
        //this code below is for the calculation
       // var calculation1=async(req,res,next)=>{
       var five=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{fiveStar:1,_id:0}) 
       var four=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{fourStar:1,_id:0})
        var three=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{threeStar:1,_id:0})
        var two=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{twoStar:1,_id:0})
        var one=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{oneStar:1,_id:0}) 
        var negOne=await restaurant.findOne({$and:[{restaurantName:req.body.Restaurant_name.trim()},{locationOne:req.body.Location_one.trim()}]},{negOneStar:1,_id:0})
        console.log(five)
        five=five.fiveStar;
        four=four.fourStar;
        three=three.threeStar;
        two=two.twoStar;
        one=one.oneStar;
        negOne=negOne.negOneStar;
        console.log(five,four,three,two,one,negOne)

         /*five=five[0]['fiveStar'];
         four=four[0]['fourStar'];
         three=three[0]['threeStar'];
         two=two[0]['twoStar'];
         one=one[0]['oneStar'];
         negOne=negOne[0]['negOneStar'];*/

         var totalReviews=(five)+(four)+(three)+(two)+(one)+(negOne)
        console.log(totalReviews)
        if(totalReviews>10){
         await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$set:{rated:true}})                   
        }
         rating2=((five*5)+(four*4)+(three*3)+(two*2)+(one*1)+(negOne*-1))/totalReviews;
         //rating2=rating2.toFixed(1)
        rating2=Math.round(rating2)
         await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$set:{rating:rating2}})                   
         console.log(rating2)
      // calculation1(req,res,next);

    } catch (error) {
        console.log(error)
        return res.send(error)
    }
    if(!updates){
        res.send("Couldn't update")
    }
    else{
       /* var updateRating=async(req,res,next)=>{
            try {
            } catch (error) {
                return console.log(error)
            }
           }
           updateRating(req,res,next)*/
        res.send("<h3>Thanks, succesfully updated</h3>")
    }
}

const add=async (req,res,next)=>{
    console.log(req.body)
    try {
        var add= new restaurant(req.body)
        add.save().then(()=>{
            res.send("Succesfully created")
        })
    } catch (error) {
        console.log(error)
         res.send(error)
    }
}

const bamenda=async (req,res)=>{
    try {
        var bda=await restaurant.find({locationTwo:'bamenda'},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!bda){res.send("Not found")}
    else{res.send(bda)}
}
const douala=async (req,res)=>{
    try {
        var dla=await restaurant.find({locationTwo:'douala'},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!dla){res.send("Not found")}
    else{res.send(dla)}
}
const yaounde=async (req,res,next)=>{
    try {
        var ynde=await restaurant.find({locationTwo:'yaounde'},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!ynde){res.send("Not found")}
    else{ res.send(ynde)}//res.send(bda)}
}
const bafoussam=async (req,res)=>{
    try {
        var bfs=await restaurant.find({locationTwo:'bafoussam'},{_id:0,__v:0}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!bfs){res.send("Not found")}
    else{res.send(bfs)}
}



const buea=async (req,res)=>{
    try {
        var Buea=await restaurant.find({locationTwo:'buea'},{_id:0,__v:0}).sort({fiveStar:1}).sort({rating:-1})
    } catch (error) {
         res.send(error)
    }
    if(!Buea){res.send("Not found")}
    else{
        console.log(Buea.length)
        res.send(Buea)}
}

const calculation=async (req,res,next)=>{
    try {
        var temp2=req.body.Restaurant_name;
        var temp3=req.body.Location_one;
        var action1=await restaurant.find({restaurantName:temp2})
        action1.forEach(item=>{
            if(item.locationOne==temp3){
                res.send(item)
            }
        })
           // res.send(action1)

    } catch (error) {
        console.log(error)
         res.send(error)
    }
}

const search=async (req,res,next)=>{
    try {
        console.log(req.query)
        var item=req.query.Restaurant_name
        var resul=await restaurant.find({restaurantName:{$regex:item,$options:'i'}},{__v:0,_id:0})
       // res.send(`Here are the results ${resul}`)
        res.render('search_results',{layout:'search_results',item1:resul})
    } catch (error) {
        return res.send(error)
    }
}


exports.getAll=getAll;
exports.bamenda=bamenda;
exports.rate=rate;
exports.add=add;
exports.buea=buea;
exports.bafoussam=bafoussam;
exports.yaounde=yaounde;
exports.douala=douala;
exports.getALlRated=getALlRated;
exports.search=search;


exports.calculation=calculation;