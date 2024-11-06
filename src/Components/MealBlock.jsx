import React from 'react';
import MealItem from './MealItem';

const MealBlock = ({ title, meals }) => (
	<div className="mb-8">
		<h2 className="text-2xl font-bold mb-4">{title}</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{meals.map((meal, index) => (
				<MealItem key={index} meal={meal} />
			))}
		</div>
	</div>
);

export default MealBlock;