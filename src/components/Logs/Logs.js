import React, { Fragment } from 'react';

function handleDataClick(e) {
	const cell = e.target;

	if (cell.classList.contains('expanded')) {
		cell.classList.remove('expanded');
	} else {
		cell.classList.add('expanded');
	}
}

const Logs = (props) => {
	const columnNames = Object.keys(props.logs[0]);
	const headers = columnNames.map(column => {
		return (
			<th key={column}>{column}</th>
		);
	});

	const rows = props.logs.map((log, index) => {
		const rowData = columnNames.map(column => {
			return (
				<td onClick={handleDataClick} key={`${column}-${index}`}>
					{log[column]}
				</td>
			);
		});

		return (
			<tr key={`row-${index}`}>
				{rowData}
			</tr>
		);
	})
	console.log('columnNames: ', columnNames);

	return (
		<Fragment>
			<hr id="logs-table-separator" />
			<p id="logs-click-instructions">Click on any collapsed piece of data to expand it</p>
			<div id="logs-table-container">
				<table>
					<thead>
						<tr>
							{headers}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default Logs;
