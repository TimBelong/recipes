import React from 'react';

const ActivityLevelButtons = ({ activity, onChange }) => {
	const activityLevels = [
		{ label: 'Низкая активность', value: '1.2' },
		{ label: 'Невысокая активность', value: '1.375' },
		{ label: 'Умеренная активность', value: '1.55' },
		{ label: 'Высокая активность', value: '1.725' }
	];

	return (
		<div style={{ width: '100%' }}>
			<label className="text-sm font-medium">Уровень активности:</label>
			<div className="flex justify-between gap-2 mt-4 activity-buttons">
				{activityLevels.map((level) => (
					<button
						key={level.value}
						type="button"
						onClick={() => onChange(level.value)}
						className={`px-4 py-2 rounded-md border ${
							activity === level.value
								? 'bg-blue-500 text-white border-blue-500'
								: 'bg-gray-200 text-gray-700 border-gray-300'
						} focus:outline-none`}
					>
						{level.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default ActivityLevelButtons;