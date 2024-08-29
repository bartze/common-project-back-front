import { Column, Grid, ClickableTile } from '@carbon/react';
import PageSeparator from '../../components/Dashboard/PageSeparator';
import {
	DocumentAdd,
	DocumentConfiguration,
	TaskRemove,
	Folders,
} from '@carbon/react/icons';

const TasksActionBar = () => {
	return (
		<>
			<PageSeparator title="Digital StoneMasons 3.0 - Tasks" />
			<br />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Folders size={32} aria-label="List Tasks" />
								<br />
								List Tasks
							</ClickableTile>
						</Column>
						<Column md={4} lg={{ span: 3, offset: 0 }} sm={4}>
							<ClickableTile>
								<DocumentAdd size={32} aria-label="Add Task" />
								<br />
								Add Task
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<DocumentConfiguration
									size={32}
									aria-label="Edit Task"
								/>
								<br />
								Edit Task
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<TaskRemove
									size={32}
									aria-label="Remove Task"
								/>
								<br />
								Remove Task
							</ClickableTile>
						</Column>
					</Grid>
				</Column>
			</Grid>
		</>
	);
};

export default TasksActionBar;
