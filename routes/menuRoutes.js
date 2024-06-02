const express=require('express')
const router=express.Router();
const menuItem=require('./../models/menuItem');

router.post('/',async(req,res)=>{
    try{
     const data=req.body;
     const newmenuitem=new menuItem(data);
     const response=await newmenuitem.save();
     console.log("menu data item gets saved");
     res.status(200).json(response);
    }
    catch(err){
     console.log("err while saving data",err);
     res.status(500).json({err:"Internal server error"});
    }
 })
 router.get('/',async(req,res)=>{
     try{
         const data=await menuItem.find();
         console.log("data saved successfully");
         res.status(200).json(data);
     }
     catch(err){
         console.log("error while fecthing data");
         res.status(500).json({err:"Internal server error"})
     }
 })



 module.exports=router;