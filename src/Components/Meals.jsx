import React, {useState} from 'react';
import mealsData from '../data/meals.json';
import MealBlock from "./MealBlock";
import MealItem from "./MealItem";


const Meals = () => {
	const [randomMeals, setRandomMeals] = useState(null);
	const getRandomMeals = () => {
		const getRandomMeal = (meals) => meals[Math.floor(Math.random() * meals.length)];

		const randomBreakfast = getRandomMeal(mealsData.breakfasts);
		const randomLunch = getRandomMeal(mealsData.lunches);
		const randomDinner = getRandomMeal(mealsData.dinners);

		setRandomMeals({
			breakfast: randomBreakfast,
			lunch: randomLunch,
			dinner: randomDinner,
		});
	}
	return (
		<div className="px-4 md:px-16 lg:px-32 xl:px-80 py-8">
			<button
				onClick={getRandomMeals}
				className="mb-8 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
			>
				Что я сегодня ем?
			</button>
			{randomMeals && (
				<div className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Ваши блюда на сегодня</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<MealItem meal={randomMeals.breakfast} />
						<MealItem meal={randomMeals.lunch} />
						<MealItem meal={randomMeals.dinner} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Meals;