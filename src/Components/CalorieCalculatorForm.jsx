import React from 'react';
import Toggle from '../UI/Toggle';
import ActivityLevelButtons from './ActivitiLevelButtons';

const CalorieCalculatorForm = ({
								   formData,
								   gender,
								   error,
								   onToggleGender,
								   onInputChange,
								   onActivityChange,
								   calculateCalories
							   }) => (
	<div>
		<h3 className="text-xl font-semibold mb-4">Введите данные для расчета калорий</h3>
		<div className="flex flex-col items-center gap-4 mb-8">
			<div className="flex items-center justify-center">
				<Toggle gender={gender} onToggle={onToggleGender} />
			</div>
			<div className="flex gap-4">
				<div>
					<label>Вес (кг):</label>
					<input
						type="number"
						name="weight"
						value={formData.weight}
						onChange={onInputChange}
						className="border p-2 rounded w-full text-stone-950 mt-4"
					/>
				</div>
				<div>
					<label>Возраст:</label>
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={onInputChange}
						className="border p-2 rounded w-full text-stone-950 mt-4"
					/>
				</div>
				<div>
					<label>Рост (см):</label>
					<input
						type="number"
						name="height"
						value={formData.height}
						onChange={onInputChange}
						className="border p-2 rounded w-full text-stone-950 mt-4"
					/>
				</div>
			</div>
			<ActivityLevelButtons activity={formData.activity} onChange={onActivityChange} />
		</div>
		{error && <p className="text-red-500 mt-4">{error}</p>}
		<p className="mb-8">Суммарная калорийность: {calculateCalories().toFixed(0)} ккал</p>
	</div>
);

export default CalorieCalculatorForm;