import React from 'react';

const FormTextArea = (props) => {
	return (
		<textarea 
			id={props.id} 
			name={props.name}
			data-parameter={props.parameter}
			data-form-type={props.formType}
			onChange={props.onFormElementChange}
			data-validation={props.validation}
		>
			{props.value}
		</textarea>
	);
};

export default FormTextArea;