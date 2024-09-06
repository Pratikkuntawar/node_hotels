const { size } = require('lodash')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
//define the person schema
const personSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['Chef','walter','manager'],//work will be saved only as chef,walter or manager
        required:true
    },
    mobile:{
        type:String,
        required:true,
        size:10
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

personSchema.pre('save',async function(next){
    const person=this;
    if(!person.isModified('password')) return next();
try{
    // to generate hash password
    const salt=await bcrypt.genSalt(10);
    //to store hash password..hashedpassword=password+salt
    const hashedPassword=await bcrypt.hash(person.password,salt);
    person.password=hashedPassword;
    next();
}
catch(err){
     return next(err);
}
})

personSchema.methods.comparePassword=async function(candidatepassword){
    try{
    const isMatch=await bcrypt.compare(candidatepassword,this.password);
    return isMatch;
    }
    catch(err){

    }
}
const person=mongoose.model('Person',personSchema)
module.exports=person;