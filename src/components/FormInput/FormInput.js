import React from 'react';

const FormInput = (props) => {
	return (
		<input 
			type={props.type}
			id={props.id}
			onChange={props.onFormElementChange}
			className="formInput"
			name={props.name}
			placeholder={props.placeholder}
			data-parameter={props.parameter}
			data-form-type={props.formType}
			data-validation={props.validation}
			value={props.value}
		/>
	)
}

export default FormInput;