import React from 'react';

const FormOption = (props) => {
	return (
		<option 
			value={props.value} 
			disabled={props.disabled}
		>
			{ props.displayText }
		</option>
	)
}

export default FormOption;