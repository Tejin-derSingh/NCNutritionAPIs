const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);
const {v4:uuidv4} = require("uuid");
// const express = require('express');
// const { Timestamp } = require("mongodb");
const cors = require("cors");


const productschema = mongoose.Schema(
{
    //  _id:{type:Number},
 productname:{type:String,required:[true ,"Please enter name"]},
 //productimage:{data:Buffer,contentType:String},
    productimage:{type:String},
//  productimagename:{type:String,required:[true ,"Please upload image"]},
//  productimage:{data:Buffer,contentType:String},
 productdescription:{type:String,required:[true ,"Please enter description"]},
 productprice:{type:Number,required:[true ,"Please enter price"]},
 
//  ,creator:{type:Number,ref:'User'}
},

{timestamps:true,
//  _id:false,
});

// productschema.plugin(AutoIncrement,{id:'productsequence',inc_field:'_id'})

const Products = mongoose.model("Product", productschema)

const PosterSchema = mongoose.Schema(
    {
        // _id:{type:Number},
     Postername:{type:String,required:[true ,"Please enter name"]},
     //productimage:{data:Buffer,contentType:String},
        Posterimage:{type:String},
    //  productimagename:{type:String,required:[true ,"Please upload image"]},
    //  productimage:{data:Buffer,contentType:String},
    //  productdescription:{type:String,required:[true ,"Please enter description"]},
    //  productprice:{type:Number,required:[true ,"Please enter price"]},
     
    //  ,creator:{type:Number,ref:'User'}
    },
    
    {timestamps:true,
    // _id:false,
    });

    const Poster = mongoose.model("PosterSchema", PosterSchema)


module.exports = {Products,Poster};
        
