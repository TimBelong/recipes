import React from 'react';

const MyButton = ({text, onClick}) => {
	return (
		<div>
			<button
				onClick={onClick}
				className="bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600"
			>
				{text}
			</button>
		</div>
	);
};

export default MyButton;