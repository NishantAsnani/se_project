const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact_Number:{
        type:Number,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    
})
const user=mongoose.model('user',userSchema)

module.exports=user