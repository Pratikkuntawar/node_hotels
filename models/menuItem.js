const { size } = require('lodash')
const mongoose=require('mongoose')
//define the person schema
const menuItemSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],//work will be saved only as chef,walter or manager
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
        unique:true
    },
    num_sales:{
        type:Number,
        default:0
    }
})
const MenuItem =mongoose.model('MenuItem',menuItemSchema)
module.exports=MenuItem;