import useConversation from "../zustand/useConversation";

const SingleConversation = ({ data, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === data._id;

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={() => setSelectedConversation(data)}
			>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src={data.profilepic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{data.name}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
	);
};

export default SingleConversation;
