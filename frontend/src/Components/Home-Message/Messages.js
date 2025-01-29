import useGetMessage from "../Hooks/useGetMessage";
import Message from "./Message";
import React, { useEffect, useRef } from 'react';

const Messages = () => {
	const {messages,loading} = useGetMessage();
	// console.log(messages);

	const messageEndRef = useRef(null);

	useEffect(() => {
		setTimeout(()=>{
			messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });	
		},100)
	  }, [messages]);


	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length>0 && messages.map((message)=>(
				<div key={message?._id}  ref={messageEndRef}>
					<Message message={message}/>
				</div>
			))}
			{loading && <p>The messages are loading</p>}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;