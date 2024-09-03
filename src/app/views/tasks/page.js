'use client';

import React, { useState } from 'react';
import TasksTable from './TasksTable';
import TasksActionBar from './TasksActionBar';
import { Grid, Column } from '@carbon/react';
import { task_headers } from '../../services/header_data';
import { task_data } from '../../services/dummy_data';
import '@carbon/charts/styles.css';

const taskData = task_data.map((x) => {
	return {
		...x,
		id: x.id.toString(),
	};
});

function TasksPage() {
	const [totalItems, setTotalItems] = useState(taskData.length);
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
		alert('Archived Item ' + i);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<>
			<TasksActionBar />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column
							md={4}
							lg={16}
							sm={4}
							style={{ marginTop: '1rem', marginBottom: '1rem' }}
						>
							{/* 							<Pagination
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
							/> */}
							<TasksTable
								headers={task_headers}
								rows={taskData.slice(
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
		</>
	);
}

export default TasksPage;
