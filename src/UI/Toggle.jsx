import React from 'react';

const Toggle = ({ gender, onToggle }) => {
	return (
		<div className="flex items-center justify-center p-2">
			<div className="relative flex w-60 h-10 bg-gray-200 rounded-md shadow-inner">
				<input
					type="radio"
					name="gender"
					value="female"
					checked={gender === 'female'}
					onChange={() => onToggle('female')}
					className="sr-only"
				/>
				<input
					type="radio"
					name="gender"
					value="male"
					checked={gender === 'male'}
					onChange={() => onToggle('male')}
					className="sr-only"
				/>
				<div
					className={`absolute top-0 bottom-0 w-1/2 rounded-md transition-transform ${
						gender === 'male' ? 'translate-x-full bg-blue-700' : 'bg-pink-700'
					}`}
					style={{
						transition: 'transform 0.3s ease',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					}}
				></div>
				<div className="flex items-center justify-between w-full px-4 text-sm font-semibold">
					<span
						className={`cursor-pointer ${
							gender === 'female' ? 'text-white' : 'text-gray-700'
						}`}
						onClick={() => onToggle('female')}
						style={{zIndex: 1}}
					>
						Женщина
					</span>
					<span
						className={`cursor-pointer ${
							gender === 'male' ? 'text-white' : 'text-gray-700'
						}`}
						onClick={() => onToggle('male')}
						style={{ zIndex: 1}}
					>
						Мужчина
					</span>
				</div>
			</div>
		</div>
	);
};

export default Toggle;