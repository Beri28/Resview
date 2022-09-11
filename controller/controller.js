const restaurant=require('../model/rest')
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded());

const getAll=async (req,res,next)=>{
    try {
        var All=await restaurant.find({},{_id:0,__v:0})
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
    try {
       if(req.body.rating=='5 stars'){
       var updates= await (await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{fiveStar:1}}))
       
        }
        else if(req.body.rating=='4 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{fourStar:1}})
       
        }
        else if(req.body.rating=='3 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{threeStar:1}})
       
        }
        else if(req.body.rating=='2 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{twoStar:1}})
       
        }
        else if(req.body.rating=='1 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{oneStar:1}})
       
        }
        else if(req.body.rating=='-1 stars'){
            var updates= await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$inc:{negOneStar:1}})
       
        }
        //this code below is for the calculation
       var calculation1=async(req,res,next)=>{
        var five=await restaurant.find({restaurantName:req.body.Restaurant_name},{fiveStar:1,_id:0}) 
        var four=await restaurant.find({restaurantName:req.body.Restaurant_name},{fourStar:1,_id:0}) 
        var three=await restaurant.find({restaurantName:req.body.Restaurant_name},{threeStar:1,_id:0}) 
        var two=await restaurant.find({restaurantName:req.body.Restaurant_name},{twoStar:1,_id:0}) 
        var one=await restaurant.find({restaurantName:req.body.Restaurant_name},{oneStar:1,_id:0}) 
        var negOne=await restaurant.find({restaurantName:req.body.Restaurant_name},{negOneStar:1,_id:0})
         five=five[0]['fiveStar'];
         four=four[0]['fourStar'];
         three=three[0]['threeStar'];
         two=two[0]['twoStar'];
         one=one[0]['oneStar'];
         negOne=negOne[0]['negOneStar'];

         var totalReviews=(five)+(four)+(three)+(two)+(one)+(negOne)
        console.log(totalReviews)
        if(totalReviews>10){
         await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$set:{rated:true}})                   
        }
         rating2=((five*5)+(four*4)+(three*3)+(two*2)+(one*1)+(negOne*-1))/totalReviews;
         //rating2=rating2.toFixed(1)
        rating2=Math.round(rating2)
         console.log(typeof(rating2))
         await restaurant.updateOne({restaurantName:req.body.Restaurant_name},{$set:{rating:rating2}})                   
         console.log(rating2)
       }
       calculation1(req,res,next);

    } catch (error) {
         res.send(error)
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
        res.send("updated")
    }
}

const add=async (req,res,next)=>{
    console.log(req.body)
    try {
        var add= new restaurant(req.body.toLowerCase())
        add.save().then(()=>{
            res.send("Succesfully created")
        })
    } catch (error) {
         res.send(error)
    }
}

const bamenda=async (req,res)=>{
    try {
        var bda=await restaurant.find({locationTwo:'bamenda'},{_id:0,__v:0})
    } catch (error) {
         res.send(error)
    }
    if(!bda){res.send("Not found")}
    else{res.send(bda)}
}
const douala=async (req,res)=>{
    try {
        var dla=await restaurant.find({locationTwo:'douala'},{_id:0,__v:0})
    } catch (error) {
         res.send(error)
    }
    if(!dla){res.send("Not found")}
    else{res.send(dla)}
}
const yaounde=async (req,res,next)=>{
    try {
        var ynde=await restaurant.find({locationTwo:'yaounde'},{_id:0,__v:0})
    } catch (error) {
         res.send(error)
    }
    if(!ynde){res.send("Not found")}
    else{ res.send(ynde)}//res.send(bda)}
}
const bafoussam=async (req,res)=>{
    try {
        var bfs=await restaurant.find({locationTwo:'bafoussam'},{_id:0,__v:0})
    } catch (error) {
         res.send(error)
    }
    if(!bfs){res.send("Not found")}
    else{res.send(bfs)}
}



const buea=async (req,res)=>{
    try {
        var Buea=await restaurant.find({locationTwo:'buea'},{_id:0,__v:0}).sort({fiveStar:1})
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
       var five=await restaurant.find({restaurantName:'Foot Print'},{fiveStar:1,_id:0}) 
       var four=await restaurant.find({restaurantName:'Foot Print'},{fourStar:1,_id:0}) 
       var three=await restaurant.find({restaurantName:'Foot Print'},{threeStar:1,_id:0}) 
       var two=await restaurant.find({restaurantName:'Foot Print'},{twoStar:1,_id:0}) 
       var one=await restaurant.find({restaurantName:'Foot Print'},{oneStar:1,_id:0}) 
       var negOne=await restaurant.find({restaurantName:'Foot Print'},{negOneStar:1,_id:0})
        five=five[0]['fiveStar'];
        four=four[0]['fourStar'];
        three=three[0]['threeStar'];
        two=two[0]['twoStar'];
        one=one[0]['oneStar'];
        negOne=negOne[0]['negOneStar'];
           
       /*console.log(five);
       console.log(four);
       console.log(three);
       console.log(two);
       console.log(one);*/
       var totalReviews=(five)+(four)+(three)+(two)+(one)
        console.log(totalReviews)
       let rating=((five*5)+(four*4)+(three*3)+(two*2)+(one*1))/totalReviews
       console.log(rating)
       res.send(`${totalReviews}, 
            ${rating}`)

    } catch (error) {
         res.send(error)
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

exports.calculation=calculation;