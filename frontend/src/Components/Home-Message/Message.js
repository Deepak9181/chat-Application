import useConversation from "../../zustand/useConversation";
import { useAuthcontext } from "../Hooks/context";

const Message = ({message}) => {
	
	const {authUser} = useAuthcontext();
	const {selectedConversation} = useConversation();

	// console.log(authUser);
	const fromMe= message.senderId === authUser.id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilepic	: selectedConversation.profilepic;
	const bgColor = fromMe ? "bg-blue-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className={`chat-image avatar`}>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white pb-2 ${bgColor} `}>{message?.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'></div>
		</div>
	);
};
export default Message;