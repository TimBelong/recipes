import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<a href="/"><img src={logo} alt="" className="header_logo"/></a>

			<ul className='nav hidden md:flex items-center justify-between gap-10'>
				<li className="text-2xl"><a href="#">Блюдо дня</a></li>
				<li className="text-2xl"><a href="#">Калории</a></li>
				<li className="text-2xl"><a href="#">Добавление</a></li>
			</ul>
		</header>
	);
};

export default Header;