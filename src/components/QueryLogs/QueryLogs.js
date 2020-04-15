import React from 'react';
import LogsForm from '../LogsForm/LogsForm';
import Logs from '../Logs/Logs';

const QueryLogs = (props) => {


	return (
		<section>
			<h2>Proxy logs</h2>
			<p>Enter a correlation ID into the field below.</p>
			<LogsForm {...props.logsForm} />
			<Logs logs={props.logs}/>
		</section>
	);
};

export default QueryLogs;