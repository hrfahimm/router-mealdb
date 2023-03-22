import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Header.css";
const Header = () => {
	return (
		<nav className="header">
			<NavLink to="/home" className="link">
				Home
			</NavLink>
			<NavLink to="/meals" className="link">
				Meals
			</NavLink>
		</nav>
	);
};

export default Header;
