import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';
import { serviceFormInputs } from '../../formInputs';


const Service = (props) => {
	// const services = props.services.map(service => <Service name={service.name} address={service.address} />);
	const inputs = serviceFormInputs.filter(input => input.name !== "Service Name");

	return (
		<li id={props.name} >
			<i data-service={props.name} className="far fa-edit" onClick={() => { props.onEditServiceClick(props.name) }} ></i>{`${props.name} (${props.address})`}
			{props.formActive ? <ServiceForm inputs={inputs} formInputChange={props.formInputChange}/> : ""}
		</li>
	);
};

export default Service;