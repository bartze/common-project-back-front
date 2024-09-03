'use client';

import React, { useState } from 'react';
import ProjectsTable from './ProjectsTable';
import ProjectsActionBar from './ProjectsActionBar';
import { Grid, Column } from '@carbon/react';
import { project_headers } from '../../services/header_data';
import { project_data } from '../../services/dummy_data';
import '@carbon/charts/styles.css';

const projectData = project_data.map((x) => {
	return {
		...x,
		id: x.id.toString(),
	};
});

function ProjectsPage() {
	const [totalItems, setTotalItems] = useState(projectData.length);
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
			<ProjectsActionBar />
			<Grid>
				<Column lg={16} md={8} sm={4} className="projects-page__r1">
					{/* 					<Pagination
						totalItems={rows.length}
						backwardText="Previous page"
						forwardText="Next page"
						pageSize={currentPageSize}
						pageSizes={[5, 10, 15, 25]}
						itemsPerPageText="Items per page"
						onChange={({ page, pageSize }) => {
							if (pageSize !== currentPageSize) {
								setCurrentPageSize(pageSize);
							}
							setFirstRowIndex(pageSize * (page - 1));
						}}
					/> */}
					<ProjectsTable
						headers={project_headers}
						rows={projectData.slice(
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
		</>
	);
}

export default ProjectsPage;
