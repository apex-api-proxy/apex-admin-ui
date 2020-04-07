import React from 'react';
import Service from '../Service/Service';

const ListServices = (props) => {
	const services = props.services.map(service => <Service 
		key={service.name} 
		name={service.name} 
		address={service.address}
		formActive={props.activeEditForm === service.name}
		onEditServiceClick={props.onEditServiceClick}
		formInputChange={props.formInputChange}
	/>);

	return (
		<section>
			<ul>
				{services}
		 	</ul>
		</section>
	);
};

export default ListServices;