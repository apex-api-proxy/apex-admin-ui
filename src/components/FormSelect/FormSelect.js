import React from 'react';
import FormOption from '../FormOption/FormOption';

const FormSelect = (props) => {
	const options = props.options.map(option => {
		return <FormOption 
					key={option}
					value={option} 
					displayText={option}
				/>
	})

	const text = `Select the ${props.name === "Requesting Service Name" ? "requesting service name" : "responding service name"}`;

	options.unshift(
		// replace static options text with a dynamic message from props
		<FormOption
			key="defaultValue" 
			value={text}
			displayText={text}
			disabled="disabled"
		/>
	);

	return (
		<select 
			id={props.id}
			onChange={props.onFormElementChange}
			className="formInput"
			name={props.name}
			value={props.value}
			data-form-type={props.formType}
			data-parameter={props.parameter}
			defaultValue={text}
			data-validation={props.validation}
		>
			{ options }
		</select>
	)
}

export default FormSelect;