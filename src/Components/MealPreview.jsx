import React from 'react';

const MealPreview = ({ meal,flexDirection, imageWidth, imageHeight, text}) => {
	return (
		<div className={`flex flex-${flexDirection} gap-4 items-center p-4 bg-white rounded shadow-sm preview cursor-pointer`}>
			<img src={meal.image} alt={meal.name} className={`${imageWidth} ${imageHeight} object-cover rounded`} />
			<div className="flex flex-col justify-start">
				<h4 className={`mt-2 text-sm font-semibold text-stone-950 text-ellipsis ${text}`}>
					{meal.name}
				</h4>
				<p className={`mt-2 text-sm font-semibold text-stone-950 text-ellipsis ${text}`}>
					Калории: {meal.calories}
				</p>
			</div>
		</div>
	);
};

export default MealPreview;
