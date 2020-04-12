import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';
import { serviceFormInputs } from '../../formInputs';


const Service = (props) => {
	const inputs = serviceFormInputs.filter(input => input.name !== "Service Name");
	inputs["defaultValue"] = props.activeEditServiceAddress;

	return (
		<li id={props.name} >
			<i data-service={props.name} className="far fa-edit" onClick={() => { props.onEditServiceClick(props.name) }} ></i>{`${props.name} (${props.address})`}
			{props.formActive ? <ServiceForm inputs={inputs} formInputChange={props.formInputChange} onFormSubmit={props.submitForm} activeEditServiceAddress={props.activeEditServiceAddress}/> : ""}
		</li>
	);
};

export default Service;