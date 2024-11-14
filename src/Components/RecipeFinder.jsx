import React, {useState} from 'react';
import MyButton from "../UI/MyButton";
import MySelect from "../UI/MySelect";
import MyInput from "../UI/MyInput";
import FilteredMealsList from "./FilteredMealsList";
import SelectedIngredients from "./SelectedIngredients";

const RecipeFinder = ({mealsData}) => {
	const [selectedMealType, setSelectedMealType] = useState('');
	const [ingredientInput, setIngredientInput] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [selectedIngredients, setSelectedIngredients] = useState([]);
	const [filteredMeals, setFilteredMeals] = useState([]);

	const handleMealTypeChange = (event) => {
		setSelectedMealType(event.target.value);
	};

	const handleIngredientInput = (event) => {
		const input = event.target.value;
		setIngredientInput(input);

		if (!selectedMealType) {
			setSuggestions([]);
			return;
		}

		const meals = mealsData[selectedMealType] || [];
		const allIngredients = meals.flatMap(meal => meal.ingredients);
		const uniqueIngredients = [...new Set(allIngredients)];

		const matchingSuggestions = uniqueIngredients.filter(ingredient =>
			ingredient.toLowerCase().includes(input.toLowerCase())
		);

		setSuggestions(matchingSuggestions.slice(0, 5)); // Показываем максимум 5 подсказок
	};

	const addIngredient = (ingredient) => {
		if (!selectedIngredients.includes(ingredient)) {
			setSelectedIngredients([...selectedIngredients, ingredient]);
		}
		setIngredientInput('');
		setSuggestions([]);
	};

	const findRecipes = () => {
		if (!selectedMealType) {
			alert('Выберите тип еды');
			return;
		}

		const meals = mealsData[selectedMealType];
		console.log('Selected meal type:', selectedMealType);
		console.log('Meals:', meals);

		if (!meals) {
			alert('Неверный тип еды');
			return;
		}

		const filtered = meals.filter(meal =>
			selectedIngredients.every(ingredient =>
				meal.ingredients.some(mealIngredient =>
					mealIngredient.toLowerCase().includes(ingredient.toLowerCase())
				)
			)
		);

		setFilteredMeals(filtered);
	};

	return (
		<div className="px-4 md:px-16 lg:px-32 xl:px-80 py-8space-y-4 mt-10">
			<h2 className="text-2xl font-bold">Найти рецепт по ингредиентам</h2>

			<div className="md:flex md:space-x-10 space-y-6 md:space-y-0 mt-10">
				<div className="flex-1">
					<MySelect
						value={selectedMealType}
						onChange={handleMealTypeChange}
						label="Выберите тип еды:"
						options={[
							{ value: 'breakfasts', label: 'Завтрак' },
							{ value: 'lunches', label: 'Обед' },
							{ value: 'dinners', label: 'Ужин' }
						]}
					/>
				</div>

				<div className="flex-1">
					<MyInput
						value={ingredientInput}
						onChange={handleIngredientInput}
						label="Введите ингредиент:"
						placeholder="Начните вводить ингредиент..."
					/>

					{suggestions.length > 0 && (
						<ul className="border p-2 mt-2 bg-white rounded shadow-lg">
							{suggestions.map((suggestion, index) => (
								<li
									key={index}
									onClick={() => addIngredient(suggestion)}
									className="cursor-pointer hover:bg-gray-200 p-1 text-stone-950"
								>
									{suggestion}
								</li>
							))}
						</ul>
					)}

					<SelectedIngredients selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
				</div>
			</div>


			<MyButton text="Что я могу приготовить?" onClick={findRecipes} />

			<FilteredMealsList filteredMeals={filteredMeals} />
		</div>
	);
};

export default RecipeFinder;