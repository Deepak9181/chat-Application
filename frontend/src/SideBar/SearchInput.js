import { IoSearchSharp } from "react-icons/io5";
import useGetUsers from "../Components/Hooks/useGetUsers";
import useConversation from "../zustand/useConversation";
import { useState } from "react";
import toast from "react-hot-toast";

const SearchInput = () => {
	const{conversation} = useGetUsers();
	const{setSelectedConversation} = useConversation();
	const[searchInput, setSearchInput] = useState("");

	const handleSubmit =(e)=>{
		e.preventDefault();
		const searchUser = conversation.find((e)=>e.name.toLowerCase().includes(searchInput.toLowerCase()));

		if(searchUser){
			setSelectedConversation(searchUser);
			setSearchInput("");
		}else{
			toast.error("User not found ");
		}
	}

	return (
		<form className='flex items-center gap-2' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' value={searchInput} 
			onChange={(e)=>setSearchInput(e.target.value)}  />

			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;