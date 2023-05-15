const mongoose=require('mongoose')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const bcrypt=require('bcrypt')
const user = require('./models/Register')
const path=require('path')
const url='mongodb://127.0.0.1:27017/myapp'



app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json()) 

mongoose.connect(url).then(()=>{
    console.log('Connected to mongoose')
}).catch((e)=>{
    console.log("Oh no !! error",e)
})



app.listen(3001,()=>{
    console.log('Listening to port 3001')
})


app.post('/Register',async (req,res)=>{
    const {First_Name,Last_Name,Email,Contact_Number,password,confirm_password}=req.body
    const HashPassword=await bcrypt.hash(password,12)
    const User=new user({
        First_Name,
        Last_Name,
        Email,
        Contact_Number,
        password:HashPassword,
        confirm_password:HashPassword
    })
    User.save().then(()=>{
        console.log('user added ')
    }).catch((e)=>{
        console.log('Error adding a user ',e)
    })
})

app.post('/Login',async(req,res)=>{
    const {Email,password}=req.body;
    const User=await user.findOne({Email});
    
     if(!User)
    {
        console.log(res.msg)
        return res.status(404).json({msg:'Data not found'})    
    }
       
    const validPassword=await bcrypt.compare(password,User.password);
    if(validPassword)
    {
        console.log("validPassword")   
        return res.status(200).json({msg:"Done"})  
          
    }
    else
    {
        console.log(res.msg)
        console.log("Invalid") 
        return res.status(500).json({msg:"Not done"}) 
           
    }
})




module.exports=app