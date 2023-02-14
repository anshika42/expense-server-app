const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
    firstname:{
        required:[true,"First name is required"],
        type:String,
    },
    lastname:{
        required:[true,'Last name is required'],
        type:String,
    },
    email:{
        required:[true,'Email is required'],
        type:String,
    },
    password:{
        required:[true,'Password is required'],
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{
    timestamp:true,
});

// Hash password 

userSchema.pre('save',async function(next)           //it will run,before data save in database 
{
    if(this.isModified('password'))              //if password modified
    {
        this.password = await bcrypt.hash(this.password,12);
    }
  next();
});


// schema to model
const User = mongoose.model("User",userSchema);

module.exports =User;