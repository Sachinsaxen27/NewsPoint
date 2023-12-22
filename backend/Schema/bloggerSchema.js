const mongoose=require("mongoose")
const{Schema}=mongoose

const bloggerSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    username:{
        type:String,required:true,unique:true
    },
    image:{
        type:String
    }
})
module.exports=mongoose.model('bloggerschema',bloggerSchema)