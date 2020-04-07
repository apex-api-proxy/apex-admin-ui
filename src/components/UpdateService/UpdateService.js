import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';

const UpdateService = (props) => {
	return (
		<section>
			<h2>Update Service</h2>
			<ServiceForm 
				onFormElementChange={props.handleFormElementChange} 
				onFormSubmit={props.handleFormSubmit} 
				inputs={formInputs}
				formValues={props.formValues}
				// setFormInputInState={props.setFormInputInState}
			/>
		</section>
	);
};

export default UpdateService;

// Add new service
// * Service unique name
// * Password
// * Token
// * IP address
/*
{
  "name": "dagpay",
  "address": "dagpayapi.azurewebsites.net",
  "token": ""
}
*/