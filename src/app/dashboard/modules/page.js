'use client';

import { Column, Grid, ClickableTile } from '@carbon/react';
import { SimpleBarChart, DonutChart } from '@carbon/charts-react';
import PageSeparator from '../../dashboard/temp_components/Dashboard/PageSeparator';
import { VideoChat, Image, Police, Folders, Upload } from '@carbon/react/icons';
import dummy_data from '../tasks/dummy_data';

const rowData = dummy_data.map((x) => {
	return {
		...x,
		id: x.id.toString(),
	};
});
const groupCount = (objectArray, property) => {
	let transform = new Map();
	transform = objectArray.reduce(function (acc, obj) {
		let key = obj[property];
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});

	let result = [];
	for (let key in transform) {
		let arraySize = transform[key].length;
		result.push({
			group: key,
			value: arraySize,
		});
	}

	return result;
};

const chartStatus = {
	data: groupCount(rowData, 'status'),
	options1: {
		title: 'Status',
		axes: {
			left: {
				mapsTo: 'group',
				scaleType: 'labels',
			},
			bottom: {
				mapsTo: 'value',
			},
		},
		height: '220px',
	},
	options2: {
		title: '',
		resizable: true,
		donut: {
			center: {
				label: 'Browsers',
			},
		},
		height: '220px',
	},
};

const chartOfficer = {
	data: groupCount(rowData, 'case_officer'),
	options1: {
		title: 'Officer',
		axes: {
			left: {
				mapsTo: 'group',
				scaleType: 'labels',
			},
			bottom: {
				mapsTo: 'value',
			},
		},
		height: '220px',
	},
	options2: {
		title: '',
		resizable: true,
		donut: {
			center: {
				label: 'Browsers',
			},
		},
		height: '220px',
	},
};

function ModulesPage() {
	return (
		<>
			<PageSeparator title="Available Sources For Analysis" />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column md={4} lg={{ span: 3, offset: 0 }} sm={4}>
							<ClickableTile>
								<VideoChat
									size={32}
									aria-label="Videos Uploaded"
								/>
								<br />
								Videos Uploaded
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Image size={32} />
								<br />
								Photos Uploaded
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Police size={32} />
								<br />
								Officer's Bodycam
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Folders size={32} />
								<br />
								Officer's Reports
							</ClickableTile>
						</Column>
						<Column md={4} lg={4} sm={4}>
							<ClickableTile>
								<Upload size={32} />
								<br />
								Another Source
							</ClickableTile>
						</Column>
					</Grid>
				</Column>
			</Grid>
			<PageSeparator title="Statistics" />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column
							md={4}
							lg={10}
							sm={4}
							style={{
								float: 'left',
								border: '1px solid #cccccc',
							}}
						>
							<SimpleBarChart
								data={chartStatus.data}
								options={chartStatus.options1}
							/>
						</Column>
						<Column
							md={4}
							lg={6}
							sm={4}
							style={{
								float: 'right',
								border: '1px solid #cccccc',
							}}
						>
							<DonutChart
								data={chartStatus.data}
								options={chartStatus.options2}
							/>
						</Column>
						<Column
							md={4}
							lg={10}
							sm={4}
							style={{
								float: 'left',
								border: '1px solid #cccccc',
								marginTop: '1rem',
								marginBottom: '1rem',
							}}
						>
							<SimpleBarChart
								data={chartOfficer.data}
								options={chartOfficer.options1}
							/>
						</Column>
						<Column
							md={4}
							lg={6}
							sm={4}
							style={{
								float: 'right',
								border: '1px solid #cccccc',
								marginTop: '1rem',
								marginBottom: '1rem',
							}}
						>
							<DonutChart
								data={chartOfficer.data}
								options={chartOfficer.options2}
							/>
						</Column>
					</Grid>
				</Column>
			</Grid>
		</>
	);
}

export default ModulesPage;
