import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';

const NewService = (props) => {
	return (
		<section>
			<h2>Add new service</h2>
			<ServiceForm inputs={props.inputs} formInputChange={props.formInputChange} onFormSubmit={props.submitForm}/>
		</section>
	);
	// return (
	// 	<section>
	// 		<h2>New Service</h2>
	// 		<ServiceForm 
	// 			onFormElementChange={props.handleFormElementChange} 
	// 			onFormSubmit={props.handleFormSubmit} 
	// 			inputs={formInputs}
	// 			formValues={props.formValues}
	// 			// setFormInputInState={props.setFormInputInState}
	// 		/>
	// 	</section>
	// );
};

export default NewService;

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