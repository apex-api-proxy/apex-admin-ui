import React from 'react';
import LogsForm from '../LogsForm/LogsForm';

const QueryLogs = (props) => {

	
	return (
		<section>
			<h2>Proxy logs</h2>
			<p>Enter a correlation ID into the field below.</p>
			<LogsForm {...props.logsForm} />
		</section>
	);
};

export default QueryLogs;