const Conversation = require("../Models/conversationSchema");
const Message = require("../Models/messageSchema");

exports.sendMessage=async (req,res)=>{
    try{
        const {message} = req.body;
        const {id:reciverId} = req.params;
        const senderId= req.user._id;

        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId,reciverId]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,reciverId]
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage)

    }
    catch (error) {
        res.status(500).json({
            error: error.message,  
            message: "Internal Server Error"
        });
    }
}


exports.getMessage = async(req,res)=>{
    try{

        const {id:userToChatId}=req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all : [senderId,userToChatId]}
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);

    }
    catch (error) {
        res.status(500).json({
            error: error.message,  
            message: "Internal Server Error"
        });
    }

}