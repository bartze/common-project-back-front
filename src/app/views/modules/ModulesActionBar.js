import { Column, Grid, ClickableTile } from '@carbon/react';
import PageSeparator from '../../components/Dashboard/PageSeparator';
import {
	DocumentAdd,
	DocumentConfiguration,
	TaskRemove,
	Folders,
} from '@carbon/react/icons';

const ModulesActionBar = () => {
	return (
		<>
			<PageSeparator title="Digital StoneMasons 3.0 - Modules" />
			<br />
			<Grid>
				<Column lg={16} md={8} sm={4}>
					<Grid>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<Folders
									size={32}
									aria-label="List Modules - table default"
								/>
								<br />
								List Modules
							</ClickableTile>
						</Column>
						<Column md={4} lg={{ span: 3, offset: 0 }} sm={4}>
							<ClickableTile>
								<DocumentAdd
									size={32}
									aria-label="Add Module - on table"
								/>
								<br />
								Add Module
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<DocumentConfiguration
									size={32}
									aria-label="Edit Module - on table"
								/>
								<br />
								Edit Module
							</ClickableTile>
						</Column>
						<Column md={4} lg={3} sm={4}>
							<ClickableTile>
								<TaskRemove
									size={32}
									aria-label="Remove Module - on table"
								/>
								<br />
								Remove Module
							</ClickableTile>
						</Column>
					</Grid>
				</Column>
			</Grid>
		</>
	);
};

export default ModulesActionBar;
