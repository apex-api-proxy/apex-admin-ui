import React from 'react';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';

const FormElement = (props) => {
	const processInput = () => {

		switch (props.input.elementType) {
			case "input":
				return (
					<FormInput 
						type={props.input.type}
						id={props.input.id}
						onFormElementChange={props.onFormElementChange}
						name={props.input.name}
						placeholder={props.input.placeholder}
						parameter={props.input.parameter}
						value={props.value}
						formType={props.input.formType}
						validation={props.input.validation}
					/>
				)
			case "select":
				return (
					<FormSelect 
						onFormElementChange={props.onFormElementChange}
						id={props.input.id}
						name={props.input.name}
						parameter={props.input.parameter}
						options={props.options}
						value={props.value}
						formType={props.input.formType}
						validation={props.input.validation}
					/>
				)
			default:
				return (
					"default case ran"
				)				
		}
	}

	return (
		<div className="form-select">
			<label htmlFor={props.input.id}>{props.input.name}</label>
				{ processInput() }	
			<p className="inactive errorMessage" data-owner={props.input.id}>{props.input.errorMessage}</p>
		</div>
	)
}

export default FormElement;