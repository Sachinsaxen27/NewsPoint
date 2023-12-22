const mongoose=require('mongoose')
const mongooseURI='mongodb://127.0.0.1:27017/K-Blog'
const connecttomongo=()=>{
    mongoose.connect(mongooseURI,console.log("You have been Successfully Connected with K-Blong on MongoDB"))

}
module.exports=connecttomongo;