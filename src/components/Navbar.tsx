import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar: React.FC = () => (
	<nav>
		<div className="nav-wrapper teal darken-1 px1">
			<a href="/" className="brand-logo">Записки сумасшедшего карася</a>
			<ul className="right hide-on-med-and-down">
				<li><NavLink to ="/">Список записок</NavLink></li>
				<li><NavLink to="/about">Какая-то инфа (кек)</NavLink></li>
				<li><NavLink to="/animations">Анимации</NavLink></li>
			</ul>
		</div>
	</nav>
)