import React from 'react';

const MySelect = ({ value, onChange, options, label }) => (
	<div className="flex-1">
		{label && <label className="block text-sm font-medium">{label}</label>}
		<select
			value={value}
			onChange={onChange}
			className="mt-2 w-full bg-transparent border-b border-gray-400 pb-3 pt-2 focus:outline-none"
		>
			<option value="">Выберите...</option>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

export default MySelect;