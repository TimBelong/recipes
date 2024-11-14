import React from 'react';

const MealItem = ({ meal }) => (
	<div className=" p-4 rounded-lg">
		<img src={meal.image} alt={meal.name} className="w-full h-96 object-cover rounded mb-4" />
		<h3 className="text-xl font-semibold">{meal.name}</h3>
		<ul className="mt-2">
			{meal.ingredients.map((ingredient) => (
				<li key={meal.id} className="text-sm text-gray-700">- {ingredient}</li>
			))}
		</ul>
	</div>
);

export default MealItem;