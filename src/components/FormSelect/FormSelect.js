import React from 'react';
import FormOption from '../FormOption/FormOption';

const FormSelect = (props) => {
	const options = props.options.map(option => {
		return <FormOption 
					key={option.employeeId}
					value={option.employeeId} 
					displayText={`${option.lastName}, ${option.firstName}`}
				/>
	})

	options.unshift(
		// replace static options text with a dynamic message from props
		<FormOption
			key="defaultValue" 
			value="Select the dependent's employee" 
			displayText="Select the dependent's employee"
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
			defaultValue={options.find(option => option.value === "Select the dependent's employee")}
			data-validation={props.validation}
		>
			{ options }
		</select>
	)
}

export default FormSelect;