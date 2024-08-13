const jwt = require("jsonwebtoken");

const generatewebtoken = (userId,res)=>{
    const token = jwt.sign({userId} ,process.env.SECRET,{
        expiresIn:"15d"
    });

    res.cookie("jwtToken",token,{
        maxAge:15*24*60*60*1000,  // should give in milli seconds // Days hours min sec millisec
        httpOnly:true,
        sameSite :"strict"  
    })

}

module.exports = generatewebtoken