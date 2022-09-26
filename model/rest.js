const mongoose=require('mongoose');
const restaurant=new mongoose.Schema({
        restaurantName:{type:String,required:true},
        img:{type:String},
        locationOne:{type:String,required:true},
        locationTwo:{type:String,required:true},
        rated:{type:Boolean,default:false},
        rating:{type:Number,default:0},
        stars:{type:String},
        fiveStar:{type:Number,default:0,},
        fourStar:{type:Number,default:0,},
        threeStar:{type:Number,default:0,},
        twoStar:{type:Number,default:0,},
        oneStar:{type:Number,default:0,},
        negOneStar:{type:Number,default:0,}
})
module.exports=mongoose.model('restaurants',restaurant)
