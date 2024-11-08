import React from 'react';
import MealPreview from "./MealPreviewю";

const SearchResults = ({ filteredMeals, searchQuery }) => {
	return (
		<div>
			{filteredMeals.length > 0 ? (
				<div className="px-4 md:px-16 lg:px-32 xl:px-80 py-8">
					<h3 className="text-xl font-semibold">Результаты поиска:</h3>
					<div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-10">
						{filteredMeals.map((meal, index) => (
							<MealPreview key={index} meal={meal} />
						))}
					</div>
				</div>
			) : (
				searchQuery && <p className="text-gray-500">Блюда не найдены</p>
			)}
		</div>
	);
};

export default SearchResults;
