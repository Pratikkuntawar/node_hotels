const mongoose =require('mongoose');
require('dotenv').config(); 
// const mongoURL='mongodb://localhost:27017/hotels'
//const mongoURL='mongodb+srv://kuntawarpratik4:pratik123@cluster0.hy1v36i.mongodb.net/'
const mongoURL=process.env.MONGODB_URL;
//const mongoURL=process.env.MONGODB_URL_LOCAL;
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to mongodb successfully");
})
db.on('error',()=>{
    console.log("rrror on connected to mongodb");
})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb successfully");
})
module.exports=db;