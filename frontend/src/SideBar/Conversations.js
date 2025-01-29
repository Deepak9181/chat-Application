import SingleConversation from "../SideBar/SingleConversation";
import useGetUsers from "../Components/Hooks/useGetUsers";
import { getRandomEmoji } from "../Components/utils/emoji";

const Conversations = () => {

	const{conversation} = useGetUsers();

	if(!conversation){
		return(
			<div>
				Loading
			</div>
		)

	}
	// console.log(conversation);
	return (
		<div className='py-2 flex flex-col overflow-auto '>
			{conversation.map((convo)=><SingleConversation  key={convo._id} emoji={getRandomEmoji()}  data={convo}/>)}
		</div>
	);
	
};
export default Conversations;