import React from 'react';
import MealPreview from './MealPreview';
import { CSSTransition } from 'react-transition-group';

const MealList = ({ randomMeals }) => (
	<CSSTransition
		in={!!randomMeals}
		timeout={500}
		classNames="meal-list"
		unmountOnExit
	>
		<div className="mb-8">
			<h2 className="text-2xl font-bold mb-4">Ваши блюда на сегодня</h2>
			<div className="grid grid-cols-1 gap-4">
				<MealPreview meal={randomMeals.breakfast} flexDirection="row" imageHeight="h-24" imageWidth="w-24" text="text-start"/>
				<MealPreview meal={randomMeals.lunch} flexDirection="row" imageHeight="h-24" imageWidth="w-24" text="text-start"/>
				<MealPreview meal={randomMeals.dinner} flexDirection="row" imageHeight="h-24" imageWidth="w-24" text="text-start"/>
			</div>
		</div>
	</CSSTransition>
);

export default MealList;