import React from 'react';
import logo from '../../apex-logo.png';
import Navbar from '../Navbar/Navbar'

const Header = (props) => {
	return (
		<header>
			<div>
				<img className="logo" alt="Apex Proxy" src={logo} />
			</div>
			<h1>Apex Proxy</h1>
			<Navbar />
		</header>
	)
}

export default Header

// <Navbar handleClick={props.navbar.handleClick} />