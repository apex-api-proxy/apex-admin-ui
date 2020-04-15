import React from 'react';
import FormElement from '../FormElement/FormElement';

const LogsForm = (props) => {
	console.log('LogsForm props: ', props);

	const inputs = props.inputs.map(input => {
		return (
			<FormElement 
				key={input.name}
				input={input} 
				onFormElementChange={props.formInputChange} 
				options={input.elementType === "select" ? props.options : "none" }
				defaultAddressValue={props.activeEditServiceAddress}
				formType={input.formType}
			/>
		)
	});

	return (
		<form action="" id={props.inputs[0].formType}>
			<p className="success inactive money"></p>
			{inputs}
			<button onClick={props.submitForm} className="submitButton" data-form={props.inputs[0].formType} data-endpoint={props.inputs[0].endpoint}>Submit</button>
		</form>
	);
};

export default LogsForm;