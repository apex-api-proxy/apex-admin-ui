import React from 'react';

const Logs = (props) => {
	const columnNames = Object.keys(props.logs[0]);
	const headers = columnNames.map(column => {
		return (
			<td>{column}</td>
		);
	});

	const rows = props.logs.map(log => {
		const rowData = columnNames.map(column => {
			return (
				<td>{log[column]}</td>
			);
		});

		return (
			<tr>
				{rowData}
			</tr>
		);
	})
	console.log('columnNames: ', columnNames);

	return (
		<table>
		  <thead>
		  	{headers}
		  </thead>
		  <tbody>
		    {rows}
		  </tbody>
		</table>
	);	
};

export default Logs;