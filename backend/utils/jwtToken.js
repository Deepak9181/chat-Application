const jwt = require("jsonwebtoken");

const generatewebtoken = (userId,res)=>{
    const token = jwt.sign({userId} ,process.env.SECRET,{
        expiresIn:'15d'
    });

    res.cookie("jwtToken", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
}

module.exports = generatewebtoken
