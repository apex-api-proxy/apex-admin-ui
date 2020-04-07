import React from 'react';


const Service = (props) => {
	// const services = props.services.map(service => <Service name={service.name} address={service.address} />);

	return (
		<li>
			{`${props.name} (${props.address})`}
		</li>
	);
};

export default Service;