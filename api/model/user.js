const mongoose=require("mongoose");



const userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    gender:String,
    email:String,
    number:Number
})

module.exports=mongoose.model('User',userSchema);