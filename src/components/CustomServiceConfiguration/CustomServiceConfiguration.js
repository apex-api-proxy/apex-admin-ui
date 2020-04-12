import React from 'react';
import ConfigForm from '../ConfigForm/ConfigForm';
import { configFormInputs } from '../../formInputs';

const CustomServiceConfiguration = (props) => {
	return (
		<section>
			<h2>Custom configurations</h2>
			<p>Select a requesting service and responding service from the drop-down menus below.  If a custom configuration already exists for the pair, it will be displayed in the text field below.</p>
			<ConfigForm {...props.configForm} displayConfigUpdateSuccess={props.displayConfigUpdateSuccess}/>
		</section>
	);
};

export default CustomServiceConfiguration;