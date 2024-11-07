import React from 'react';

const SelectedIngredients = ({ selectedIngredients, setSelectedIngredients }) => (
	<div className="my-10">
		<h3 className="text-lg font-semibold">Выбранные ингредиенты:</h3>
		<ul className="flex flex-wrap gap-2 mt-5">
			{selectedIngredients.map((ingredient, index) => (
				<li
					key={index}
					onClick={() => setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient))}
					className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
				>
					{ingredient}
				</li>
			))}
		</ul>
	</div>
);

export default SelectedIngredients;
