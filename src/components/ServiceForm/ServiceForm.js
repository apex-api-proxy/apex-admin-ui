import React from 'react';
import FormElement from '../FormElement/FormElement'

const ServiceForm = (props) => {
	const inputs = props.inputs.map(input => {
		return (
			<FormElement 
				key={input.name}
				input={input} 
				onFormElementChange={props.formInputChange} 
				options={input.elementType === "select" ? props.options : "none" }
				// value={props.formValues[input.id]}
				// setFormInputInState={props.formInputChange}
				formType={input.formType}
			/>
		)
	})

	return (
		<form action="" id={props.inputs[0].formType}>
			<p className="success inactive money"></p>
			{inputs}
			<button onClick={props.onFormSubmit} className="submitButton" data-form={props.inputs[0].formType} data-endpoint={props.inputs[0].endpoint}>Submit</button>
		</form>
	)
}

export default ServiceForm;

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