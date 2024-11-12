import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Импортируем компонент FontAwesomeIcon
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from "./SearchResults";

const SearchByName = ({ mealsData }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [gifilteredMeals, setFilteredMeals] = useState([]);

	const handleSearch = (event) => {
		const query = event.target.value;
		setSearchQuery(query);

		if (query.trim() === '') {
			setFilteredMeals([]);
			return;
		}

		const allMeals = Object.values(mealsData).flat();
		const results = allMeals.filter(meal =>
			meal.name.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredMeals(results);
	};

	return (
		<div className="pb-8 space-y-4">
			<div
				className="relative py-10 px-10 md:px-16 lg:px-32 xl:py-40 xl:px-60 bg-[url('https://images.gastronom.ru/bvZeW6xtPp9yJ3rr1g1Rsm38r7Ika71oitA-QpOf-HU/pr:default/g:ce/rs:auto:0:0:0/Z2FzdHJvbm9tL2FsbC1pbWFnZXMvNTg5NzA0NDItNjQxZS00NjhlLTg4NzAtMDcwYThlMzY2YmRkLmpwZw')] bg-cover bg-center rounded-lg">
				<div className="absolute inset-0 bg-black/50 rounded-lg"></div>
				<h2 className="relative text-2xl md:text-4xl lg:text-6xl font-bold mb-5 xl:mb-10">Поиск по названию блюда</h2>
				<div className="search relative max-w-5xl mx-auto">
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearch}
						className="relative w-full bg-white text-stone-950 py-2 px-5 rounded focus:outline-none"
						placeholder="Введите название блюда..."
					/>
					<FontAwesomeIcon
						icon={faSearch}
						className="absolute right-5 top-1/2 transform -translate-y-1/2"
						style={{ fill: '#292524' }}
					/>
				</div>
			</div>

			<SearchResults filteredMeals={filteredMeals} searchQuery={searchQuery} />
		</div>


	);
};

export default SearchByName;
