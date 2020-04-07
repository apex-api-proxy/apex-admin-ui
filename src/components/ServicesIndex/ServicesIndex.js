import React from 'react';
import Service from '../Service/Service';

const ServicesIndex = (props) => {
	const services = props.services.map(service => {
		return (
			<Service 
				key={service.serviceId}
				serviceId={service.serviceId}
				firstName={service.firstName}
				lastName={service.lastName}
				deduction={service.deduction}
				dependents={!!service.dependents ? service.dependents : []}
			/>
		)
	});

	return (
		<section>
			<h2>Beneficiaries</h2>
			<ul className="employees" onClick={props.displayDependentsListener} onKeyDown={props.displayDependentsListener}>
				{employees}
			</ul>
		</section>
	)
}

export default ServicesIndex;