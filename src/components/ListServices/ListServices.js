import React from 'react';
import Service from '../Service/Service';

const ListServices = (props) => {
	console.log('ListServices props: ', props);
	const services = props.services.map(service => <Service 
		key={service.name} 
		name={service.name} 
		address={service.address}
		formActive={props.activeEditForm === service.name}
		onEditServiceClick={props.onEditServiceClick}
		formInputChange={props.formInputChange}
		submitForm={props.submitForm}
		initialAddressValue={props.activeEditServiceAddress}
	/>);

	return (
		<section>
			<h2>Current services</h2>
			<ul>
				{services}
		 	</ul>
		</section>
	);
};

export default ListServices;