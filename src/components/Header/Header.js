import React from 'react';
import logo from '../../apex-logo.png';
// import Navbar from '../Navbar/Navbar'

const Header = (props) => {
	return (
		<header>
			<div>
				<img className="logo" src={logo} />
			</div>
			<h1>Apex Proxy</h1>
			
		</header>
	)
}

export default Header

// <Navbar handleClick={props.navbar.handleClick} />