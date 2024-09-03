'use client';

import React from 'react';
import {
	DataTable,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableExpandHeader,
	TableHeader,
	TableBody,
	TableExpandRow,
	TableCell,
	TableExpandedRow,
} from '@carbon/react';

const NotificationsTable = ({ rows, headers }) => {
	const getRowDescription = (rowId) => {
		const row = rows.find(({ id }) => id === rowId);
		return row ? row.description : '';
	};

	return (
		<DataTable
			rows={rows}
			headers={headers}
			render={({
				rows,
				headers,
				getHeaderProps,
				getRowProps,
				getTableProps,
			}) => (
				<TableContainer
					title="Notifications"
					description="A list of notifications."
				>
					<Table {...getTableProps()}>
						<TableHead>
							<TableRow>
								<TableExpandHeader />
								{headers.map((header) => (
									<TableHeader
										{...getHeaderProps({ header })}
										key={header.key}
									>
										{header.header}
									</TableHeader>
								))}
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
			)}
		/>
	);
};

export default NotificationsTable;
