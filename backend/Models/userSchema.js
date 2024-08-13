const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required :true,
        enum:["Male","Female"]
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

module.exports = User;