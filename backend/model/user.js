const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true , "Please add a name"] ,
        },
        email : {
            type : String,
            required : [true , "Please add an email"] ,
            unique : true ,
            // trim for no space between email letters
            trim : true,
            //for checkin if email is a valid one 
            match : [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email",
            ],
        },
        password :{
            type : String,
            required : [ true , "Please add a password" ]
        },
        photo : {
            type : String,
            default : "hi photo"
        },
        phone :{
            type : String,
            default : "+12345"
        },
        bio :{
            type : String,
            default : "bio"
        },
        role :{
            type : String,
            required : true  ,
            default : "subscriber"
            //subscriber author admin suspended
        },
        isVerified :{
            type : Boolean,
            default : false
            //should be false because initially user is not verified
        },
        //for checking which device is user using to come to app
        userAgent :{
            type : Array,
            required : true ,
            default : [],
        },
    },
    
    {
        timestamps : true , 
        minimize : false ,
    }
)

module.exports = mongoose.model('User' , userSchema)