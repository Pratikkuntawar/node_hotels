const mongoose =require('mongoose');
const mongoURl='mongodb://localhost:27017/hotels'
mongoose.connect(mongoURl,{
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