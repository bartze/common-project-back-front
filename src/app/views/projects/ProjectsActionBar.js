import { Column, Grid, ClickableTile } from '@carbon/react';
import PageSeparator from '../../components/Dashboard/PageSeparator';
import {
	DocumentAdd,
	DocumentConfiguration,
	TaskRemove,
	Folders,
} from '@carbon/react/icons';

const ProjectsActionBar = () => {
	return (
		<>
			<PageSeparator title="Digital StoneMasons 3.0 - Projects" />
			<br />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Folders size={32} aria-label="List Projects" />
								<br />
								List Projects
							</ClickableTile>
						</Column>
						<Column md={4} lg={{ span: 3, offset: 0 }} sm={4}>
							<ClickableTile>
								<DocumentAdd
									size={32}
									aria-label="Add Project"
								/>
								<br />
								Add Project
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<DocumentConfiguration
									size={32}
									aria-label="Edit Project"
								/>
								<br />
								Edit Project
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<TaskRemove
									size={32}
									aria-label="Remove Project"
								/>
								<br />
								Remove Project
							</ClickableTile>
						</Column>
					</Grid>
				</Column>
			</Grid>
		</>
	);
};

export default ProjectsActionBar;
