import React from 'react';
import ListServices from '../ListServices/ListServices';
import NewService from '../NewService/NewService';

const ServicesIndex = (props) => {
	return (
		<div>
			<NewService {...props.newService} />
			<ListServices 
				{...props.listServices}
				activeEditForm={props.activeEditForm}
			/>
		</div>
	)
}

export default ServicesIndex;