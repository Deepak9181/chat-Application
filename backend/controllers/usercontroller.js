const User = require("../Models/userSchema");

exports.getUsers =async(req,res)=>{
    const userId = req.user._id;

    const getalluser = await User.find({_id:{$ne:userId}}).select("-password")

    res.status(201).json({
        status:"Success",
        length:getalluser.length,
        users:getalluser
    })

}