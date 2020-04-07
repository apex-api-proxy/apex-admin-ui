import React from 'react'

const Navbar = (props) => {
	return (
		<nav>
		  <ul>
		    <li className="header-link"><a href="Beneficiaries" data-view="BeneficiariesIndex" onClick={props.handleClick}>Beneficiaries</a></li>
		    <li className="header-link">|</li>
		    <li className="header-link"><a href="Add Employee" data-view="CreateEmployee" onClick={props.handleClick}>Add Employee</a></li>
		    <li className="header-link">|</li>
		    <li className="header-link"><a href="Add Dependent" data-view="CreateDependent" onClick={props.handleClick}>Add Dependent</a></li>
		  </ul>
		</nav>
	)
}

export default Navbar