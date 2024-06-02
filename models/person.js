const { size } = require('lodash')
const mongoose=require('mongoose')
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
    }
})
const person=mongoose.model('Person',personSchema)
module.exports=person;