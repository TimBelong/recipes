import React, { useRef } from 'react';
import MealItem from './MealItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FilteredMealsList = ({ filteredMeals }) => {
	const nodeRefs = useRef(filteredMeals.map(() => React.createRef())); // Создаем рефы для каждого элемента

	return (
		filteredMeals.length > 0 && (
			<div className="py-8">
				<h3 className="text-xl font-bold">Рецепты, которые вы можете приготовить:</h3>

				<TransitionGroup
					className={`grid gap-4 mt-4 ${
						filteredMeals.length === 1
							? 'grid-cols-1 justify-items-center'
							: 'grid-cols-1 md:grid-cols-2'
					}`}
				>
					{filteredMeals.map((meal, index) => {
						nodeRefs.current[index] = nodeRefs.current[index] || React.createRef()
						return (
						<CSSTransition
							key={meal.id}
							timeout={500}
							classNames="meal"
							nodeRef={nodeRefs.current[index]}
						>
							<div ref={nodeRefs.current[index]}>
								<MealItem meal={meal} />
							</div>
						</CSSTransition>
						)
					})}
				</TransitionGroup>
			</div>
		)
	);
};

export default FilteredMealsList;
