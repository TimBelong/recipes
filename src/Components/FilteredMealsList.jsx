import React from 'react';
import MealItem from './MealItem';

const FilteredMealsList = ({ filteredMeals }) => (
	filteredMeals.length > 0 && (
		<div className="py-8">
			<h3 className="text-xl font-bold">Рецепты, которые вы можете приготовить:</h3>
			<div
				className={`grid gap-4 mt-4 ${
					filteredMeals.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2'
				}`}
			>
				{filteredMeals.map((meal, index) => (
					<MealItem key={index} meal={meal} />
				))}
			</div>
		</div>
	)
);

export default FilteredMealsList;
