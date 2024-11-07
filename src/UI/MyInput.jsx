import React from 'react';

const MyInput = ({ value, onChange, placeholder, label, type = "text" }) => (
	<div className="flex-1">
		{label && <label className="block text-sm font-medium">{label}</label>}
		<input
			type={type}
			value={value}
			onChange={onChange}
			className="mt-2 w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none"
			placeholder={placeholder}
		/>
	</div>
);

export default MyInput;
