import React, { useState } from 'react';
import MyButton from "../UI/MyButton";
import CalorieCalculatorForm from './CalorieCalculatorForm';
import MealList from './MealList';
import { CSSTransition } from 'react-transition-group';

const Meals = ({ mealsData }) => {
	const [randomMeals, setRandomMeals] = useState(null);
	const [gender, setGender] = useState('male');
	const [formData, setFormData] = useState({
		weight: '74',
		age: '30',
		height: '177',
		activity: '1.2'
	});
	const [error, setError] = useState('');

	const handleToggle = (selectedGender) => setGender(selectedGender);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const handleActivityChange = (value) => setFormData(prevData => ({ ...prevData, activity: value }));

	const validateForm = () => {
		const { weight, age, height } = formData;
		if (!weight || weight <= 0 || !age || age <= 0 || !height || height <= 0) {
			setError("Пожалуйста, введите корректные данные для веса, роста и возраста.");
			return false;
		}
		setError('');
		return true;
	};

	const calculateCalories = () => {
		const { weight, age, height, activity } = formData;
		const baseCalories =
			gender === 'male'
				? 10 * weight + 6.25 * height - 5 * age + 5
				: 10 * weight + 6.25 * height - 5 * age - 161;
		return baseCalories * parseFloat(activity);
	};

	const getRandomMeals = () => {
		if (!validateForm()) return;

		const dailyCalories = calculateCalories();
		let selectedMeals = [];
		let totalCalories = 0;

		while (totalCalories < dailyCalories) {
			const randomBreakfast = mealsData.breakfasts[Math.floor(Math.random() * mealsData.breakfasts.length)];
			const randomLunch = mealsData.lunches[Math.floor(Math.random() * mealsData.lunches.length)];
			const randomDinner = mealsData.dinners[Math.floor(Math.random() * mealsData.dinners.length)];
			const meals = [randomBreakfast, randomLunch, randomDinner];
			const calories = meals.reduce((acc, meal) => acc + (meal?.calories || 0), 0);

			if (calories <= dailyCalories) {
				selectedMeals = meals;
				totalCalories = calories;
				break;
			}
		}

		setRandomMeals({
			breakfast: selectedMeals[0],
			lunch: selectedMeals[1],
			dinner: selectedMeals[2],
		});
	};

	return (
		<div className="flex flex-col px-4 md:px-16 lg:px-28 xl:px-48 xl:flex-row xl:justify-between py-8">
			<div
				className={`calculator-container ${randomMeals ? 'calculator-container-small' : 'calculator-container-full'}`}
			>
				<CalorieCalculatorForm
					formData={formData}
					gender={gender}
					error={error}
					onToggleGender={handleToggle}
					onInputChange={handleInputChange}
					onActivityChange={handleActivityChange}
					calculateCalories={calculateCalories}
				/>
				<MyButton text="Что я сегодня ем?" onClick={getRandomMeals}/>
			</div>
			<CSSTransition in={!!randomMeals} timeout={500} classNames="meal-list" unmountOnExit>
				<div>
					<MealList randomMeals={randomMeals}/>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Meals;