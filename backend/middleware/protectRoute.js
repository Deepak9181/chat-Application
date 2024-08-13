const User = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

const protectroute = async(req,res,next)=>{
    try{
        const token = req.cookies.jwtToken;

        if(!token){
            return res.status(401).json({error:"Unauthorized - No token Provided"})
        }

        const decoded = jwt.verify(token,process.env.SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        req.user = user;
        next();
    }
    catch (error) {
        res.status(500).json({
            error: error.message,  
            message: "Internal Server Error"
        });
    }
}

module.exports = protectroute;