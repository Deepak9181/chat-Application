const GenderCheckbox = ({onChangeCheckBox,selectedGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer `} >
					<span className='label-text'>Male</span>
					<input type='checkbox'  className='checkbox border-slate-900'
					checked={selectedGender === "Male"}
					onChange={() => onChangeCheckBox("Male")}/>
				</label>
			</div>
			
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  `}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900'  
					checked={selectedGender === "Female"}
					onChange={() => onChangeCheckBox("Female")} /> 
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;