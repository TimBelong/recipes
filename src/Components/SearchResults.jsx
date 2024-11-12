import React, { useRef } from 'react';
import MealPreview from "./MealPreviewю";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SearchResults = ({ filteredMeals, searchQuery }) => {
	const nodeRefs = useRef([]);
	return (
		<div>
			{filteredMeals.length > 0 ? (
				<div className="px-4 md:px-16 lg:px-32 xl:px-80 py-8">
					<h3 className="text-xl font-semibold">Результаты поиска:</h3>
					<TransitionGroup  className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-10">
						{filteredMeals.map((meal, index) => {
							nodeRefs.current[index] = nodeRefs.current[index] || React.createRef();
							return (
								<CSSTransition
									key={index}
									timeout={500}
									classNames="meal"
									nodeRef={nodeRefs.current[index]}
								>
									<div ref={nodeRefs.current[index]}>
										<MealPreview meal={meal} />
									</div>
								</CSSTransition>
							);
						})}
					</TransitionGroup>
				</div>
			) : (
				searchQuery && <p className="text-gray-500">Блюда не найдены</p>
			)}
		</div>
	);
};

export default SearchResults;
