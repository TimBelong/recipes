import React from 'react';

const MealPreview = ({ meal }) => {
	return (
		<div className="flex flex-col items-center p-4 bg-white rounded shadow-sm">
			<img src={meal.image} alt={meal.name} className="w-24 h-24 object-cover rounded" />
			<h4 className="mt-2 text-sm font-semibold text-stone-950"
				style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
				{meal.name}
			</h4>
		</div>
	);
};

export default MealPreview;
