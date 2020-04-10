import React from 'react';

const TokenModal = (props) => {
	return (
		<section>
			<h2>Service authentication token</h2>
			<p>Please record the token below for service authentication. It will not be shown again. To generate a new token, set a new password using the service's edit form:</p>
			<p>{props.token}</p>
			<button onClick={props.doneRecordingToken}>Done!</button>
		</section>
	);
};

export default TokenModal;