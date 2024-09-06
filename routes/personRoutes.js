const express=require('express')
const router=express.Router();
const Person=require('./../models/person')
const {jwtAuthMiddleware,generateToken}=require('./../jwt')
router.post('/signup',async(req,res)=>{
    // const data=req.body;
    // const newPerson=new Person(data);
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //     console.log(error,"error saving person");
    //     res.status(500).json({error:'Internal server error'})
    //     }
    //     else{
    //         console.log("data saved successfully");
    //         res.status(200).json(person);
    //     }
    // })
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log("data saved successfully in database")
        const token=generateToken(response.username);
        console.log("token is",token)
        res.status(200).json({response:response,token:token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})
    }
})

router.post('/login',async(req,res)=>{
    try{
    //extract username and password from req body
        const {username,password}=req.body;
        //find the user by username and password
        const user=await Person.findOne({username:username})
        //if user or password does not match then return the error
        if(!user||(!await user.comparePassword(password))){
            return res.status(401).json({error:"Invalid username or password"})
        }
        const payload={
            id:user.id,
            username:user.username
        }

        const token=generateToken(payload);
        res.json({token})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try{
    const userData=req.user;
    console.log("User Data",userData)
    const userid=userData.id;
    const user=await Person.findById(userid);
    res.status(200).json({user:user})
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})     
    }
})

router.get('/',jwtAuthMiddleware,async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})  
    }
})

router.get('/:workType',async(req,res)=>{
    try{
    const workType=req.params.workType;
    if(workType==="Chef"|| workType==="walter"|| workType==="manager"){
        const response =await Person.find({work:workType});
        console.log("data fetched successfully");
        res.status(200).json(response);
    }
    else{
        res.status(404).json({error:"invalid workType"})
    }
    }
    catch(err){
        console.log("data is unavailable");
        res.status(500).json({err:"invalid server error"})
    }
})

router.put('/:id',async(req,res)=>{
    try{
     const person_id=req.params.id;
     const updatedpersondata=req.body;
     const response=await Person.findByIdAndUpdate(person_id,updatedpersondata,{
        new:true,//new true now response will contain updated data 
        runValidators:true
     })
     if(!response){
        return res.status(404).json({error:"person_id is not found"})
     }
     console.log("data updated succcessfully");
     res.status(200).json({response});
    }
    catch(err){
    console.log("data is not updated",err)
    res.status(500).json({err:"Internal server error"})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const person_id=req.params.id;
        const deleteddata=await Person.findByIdAndDelete(person_id)
        if(!deleteddata){
            return res.status(404).json({error:"person data is not found"})
        }
        console.log("data deleted successfully")
        res.status(200).json({msg:"data deleted"})
    }
    catch(err){
        console.log("data is not deleted",err);
        res.status(500).json({error:"Internal Server error"})
    }
})

module.exports=router;                                           