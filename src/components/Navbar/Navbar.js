import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav>
		  <NavLink to='/services' activeClassName="active" activeStyle={{color: '#65c8d0'}}>Services</NavLink>
		  <div> | </div>
		  <NavLink to='/configuration' activeClassName="active" activeStyle={{color: '#65c8d0'}}>Configuration</NavLink>
		  <div> | </div>
		  <NavLink to='/logs' activeClassName="active" activeStyle={{color: '#65c8d0'}}>Logs</NavLink>
		</nav>
	)
};

export default Navbar;

// <li className="header-link"><a href="Beneficiaries" data-view="BeneficiariesIndex" onClick={props.handleClick}>Beneficiaries</a></li>
// 		    <li className="header-link">|</li>
// 		    <li className="header-link"><a href="Add Employee" data-view="CreateEmployee" onClick={props.handleClick}>Add Employee</a></li>
// 		    <li className="header-link">|</li>
// 		    <li className="header-link"><a href="Add Dependent" data-view="CreateDependent" onClick={props.handleClick}>Add Dependent</a></li>