const express = require('express')
const app = express()
const db=require('./db')
const Person=require('./models/person')
const bodyParser=require('body-parser')
// const person = require('./models/person')
const menuItem=require('./models/menuItem');

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send("server is running at port address 8080")
})
app.get('/about',(req,res)=>{
    res.send("you are currently on about page")
})
app.get('/contact',(req,res)=>{
    res.send("you are currently on contact page")
})
// app.post('/person',async(req,res)=>{
//     // const data=req.body;
//     // const newPerson=new Person(data);
//     // newPerson.save((error,savedPerson)=>{
//     //     if(error){
//     //     console.log(error,"error saving person");
//     //     res.status(500).json({error:'Internal server error'})
//     //     }
//     //     else{
//     //         console.log("data saved successfully");
//     //         res.status(200).json(person);
//     //     }
//     // })
//     try{
//         const data=req.body;
//         const newPerson=new Person(data);
//         const response=await newPerson.save();
//         console.log("data saved")
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:"Internal server error"})
//     }
// })
// app.get('/person',async(req,res)=>{
//     try{
//         const data=await Person.find();
//         console.log("data fetched");
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:"Internal server error"})  
//     }
// })
// app.post('/menu',async(req,res)=>{
//    try{
//     const data=req.body;
//     const newmenuitem=new menuItem(data);
//     const response=await newmenuitem.save();
//     console.log("menu data item gets saved");
//     res.status(200).json(response);
//    }
//    catch(err){
//     console.log("err while saving data",err);
//     res.status(500).json({err:"Internal server error"});
//    }
// })
// app.get('/menu',async(req,res)=>{
//     try{
//         const data=await menuItem.find();
//         console.log("data saved successfully");
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log("error while fecthing data");
//         res.status(500).json({err:"Internal server error"})
//     }
// })
// app.get('/person/:workType',async(req,res)=>{
//     try{
//     const workType=req.params.workType;
//     if(workType==="Chef"|| workType==="walter"|| workType==="manager"){
//         const response =await Person.find({work:workType});
//         console.log("data fetched successfully");
//         res.status(200).json(response);
//     }
//     else{
//         res.status(404).json({error:"invalid workType"})
//     }
//     }
//     catch(err){
//         console.log("data is unavailable");
//         res.status(500).json({err:"invalid server error"})
//     }
// })
//personRoutes
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);  

//menuRoutes
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes); 

app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})
// var notes=require('./notes.js')
// var _ = require('lodash');
// console.log("server is in building right now");
// console.log("pratik");
// console.log("ritik");
// const additionfunction=(a,b)=>{
//     console.log("adddition function works here "+(a+b));
// }
// additionfunction(3,5);
// const suntractfunction=(a,b)=>a-b;
// console.log("result of sunstraction function   "+suntractfunction(8,3));
// //create a function which takes string as an input and gives the count of vowels occured in that string
// function countvowelsinstring(str){
//     var count=0;
//     for(var char of str){
//         if(char=='a' || char =='e'|| char ==='i'|| char=='o'|| char==='u'){
//             count=count+1;
//         }
//     }
//     console.log("no of vowels occured in string are "+count);
// }
// countvowelsinstring("pratik");
// //perform same by arrow function
// const countvowelsinstrings=(str)=>{
//     var count=0;
//     for(var char of str){
//         if(char=='a' || char =='e'|| char ==='i'|| char=='o'|| char==='u'){
//             count=count+1;
//         }
//     }
//     console.log("no of vowels occured in string are "+count);  
// }
// countvowelsinstrings("apnacollege");
// [1,2,3].forEach((val)=>{
//     console.log(val);
// })
// console.log("--------------------------------------------------------------------------------------------------------------")
// //for a given array,print square of each value
// var arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// })
// console.log("--------------------------------------------------------------------------------------------------------------")
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile("textfile.txt","Hi pratik",()=>{

// });
// age=notes.age;
// console.log(user.username +"age is "+age);
// notes.addfunction(4,6);
// var array=["person","person",1,2,3,4,5,6,7,10,1,2,3,4,5];
// console.log(_.uniq(array))

// const jsonobject={
//     name:"john",
//     age:25
// }
// const jsonstringfield=JSON.stringify(jsonobject);
// console.log(jsonstringfield)
// var jsonobj=JSON.parse(jsonstringfield)
// console.log(jsonobj.name)
// const express=require("express")
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("server is activate at 8500 portal");
// })
// app.listen(8500)

