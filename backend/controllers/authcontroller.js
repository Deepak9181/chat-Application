const User = require("../Models/userSchema");
const bcyrpt = require("bcryptjs");
const generatewebtoken = require("../utils/jwtToken");

exports.signup=async (req,res)=>{
    try{
        const {name,username,password,confirm,gender} = req.body;
        
        if(password!==confirm){
           return res.status(400).send({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
          return  res.status(400).json({error:"Username already exsit"});
        }

        const salt = await bcyrpt.genSalt(10);
        const hashpassword = await bcyrpt.hash(password,salt);

        const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newuser =new User({
            name,
            username,
            password:hashpassword,
            gender,
            profilepic: gender==="Male" ? boyprofilepic : girlprofilepic
        });
        

        if(newuser){
            generatewebtoken(newuser._id,res);            
            await newuser.save();
            return res.status(201).json({
                username:newuser.username,
                gender:newuser.gender,
                profilepic:newuser.profilepic
            })

        }else{
            res.status(400).json({error:"Invalid User data"})
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            details: error.message
    });
}
}


exports.login=async(req,res)=>{
    try{
        const{username,password}= req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:"Invalid username and Password"})
        }

        const hashpass = await bcyrpt.compare(password,user.password);
        // console.log(hashpass);

        if(!hashpass){
            return res.status(401).json({error:"Invalid username and Password"})
        }
        
        generatewebtoken(user._id,res); 
        
        res.status(201).json({
            id:user._id,
            name:user.name,
            username:user.username,
            profilepic:user.profilepic
        })

    }
    catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            details: error.message
        });
    }
}


exports.logout=(req,res)=>{
    try{
        res.cookie("jwtToken","",{maxAge:0});
        res.status(201).json({
            messgae:"logout successful"
    })
    }
    catch(error){
        console.log("Internal Server Error:",error);
    }

}