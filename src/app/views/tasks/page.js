'use client';

import React, { useState } from 'react';
import TasksTable from './TaskTable';
import { Pagination, Grid, Column } from '@carbon/react';

import header_data from './header_data';
import dummy_data from './dummy_data';

import '@carbon/charts/styles.css';

const headerData = header_data;
const rowData = dummy_data.map((x) => {
	return {
		...x,
		id: x.id.toString(),
	};
});

function TasksPage() {
	const [totalItems, setTotalItems] = useState(rowData.length);
	const [firstRowIndex, setFirstRowIndex] = useState(0);
	const [currentPageSize, setCurrentPageSize] = useState(5);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedIncident, setSelectedIncident] = useState({});
	const editIncidentReport = (i) => {
		let incident = {};

		i.cells.map((x) => {
			let id = x.id.split(':')[1];
			incident[id] = x.value;
		});

		setSelectedIncident(incident);
		setModalIsOpen(true);
	};

	const archiveIncidentReport = (i) => {
		console.log(i);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<Grid>
			<Column lg={16} md={8} sm={4}>
				<Grid>
					<Column
						md={4}
						lg={16}
						sm={4}
						style={{ marginTop: '1rem', marginBottom: '1rem' }}
					>
						<Pagination
							totalItems={totalItems}
							backwardText="Previous page"
							forwardText="Next page"
							pageSize={currentPageSize}
							pageSizes={[5, 25, 50, 100]}
							itemsPerPageText="Items per page"
							onChange={({ page, pageSize }) => {
								if (pageSize !== currentPageSize) {
									setCurrentPageSize(pageSize);
								}
								setFirstRowIndex(pageSize * (page - 1));
							}}
						/>
						<TasksTable
							headers={headerData}
							rows={rowData.slice(
								firstRowIndex,
								firstRowIndex + currentPageSize,
							)}
							editIncidentHandler={editIncidentReport}
							archiveIncidentHandler={archiveIncidentReport}
						/>
						{modalIsOpen && (
							<ReportModal
								modalIsOpen={modalIsOpen}
								modalCancelHandler={closeModal}
								incident={selectedIncident}
							/>
						)}
					</Column>
				</Grid>
			</Column>
		</Grid>
	);
}

export default TasksPage;
