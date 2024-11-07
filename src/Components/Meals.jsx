import React, {useState} from 'react';
import MealItem from "./MealItem";
import MyButton from "../UI/MyButton";


const Meals = ({mealsData}) => {
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
		<div className="py-8">
			<MyButton text="Что я сегодня ем?" onClick={getRandomMeals} />

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