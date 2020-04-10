import React from 'react';
import ListServices from '../ListServices/ListServices';
import NewService from '../NewService/NewService';
import TokenModal from '../TokenModal/TokenModal';

const ServicesIndex = (props) => {
	if (props.token) {
	  return <TokenModal token={props.token} doneRecordingToken={props.doneRecordingToken}/>
	} else {
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
};

export default ServicesIndex;