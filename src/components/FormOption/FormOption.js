import React from 'react';

const FormOption = (props) => {
	return (
		<option 
			value={props.value} 
		>
			{ props.displayText }
		</option>
	)
}

export default FormOption;