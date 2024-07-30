import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModuleService from '../../services/module.service';

export default class ModulesList extends Component {
	constructor(props) {
		super(props);
		this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
		this.retrieveModules = this.retrieveModules.bind(this);
		this.refreshList = this.refreshList.bind(this);
		this.setActiveModule = this.setActiveModule.bind(this);
		this.removeAllModules = this.removeAllModules.bind(this);
		this.searchTitle = this.searchTitle.bind(this);

		this.state = {
			modules: [],
			currentModule: null,
			currentIndex: -1,
			searchTitle: '',
		};
	}

	componentDidMount() {
		this.retrieveModules();
	}

	onChangeSearchTitle(e) {
		const searchTitle = e.target.value;

		this.setState({
			searchTitle: searchTitle,
		});
	}

	retrieveModules() {
		ModuleService.getAll()
			.then((response) => {
				this.setState({
					modules: response.data,
				});
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	refreshList() {
		this.retrieveModules();
		this.setState({
			currentModule: null,
			currentIndex: -1,
		});
	}

	setActiveModule(module, index) {
		this.setState({
			currentModule: module,
			currentIndex: index,
		});
	}

	removeAllModules() {
		ModuleService.deleteAll()
			.then((response) => {
				console.log(response.data);
				this.refreshList();
			})
			.catch((e) => {
				console.log(e);
			});
	}

	searchTitle() {
		this.setState({
			currentModule: null,
			currentIndex: -1,
		});

		ModuleService.findByTitle(this.state.searchTitle)
			.then((response) => {
				this.setState({
					modules: response.data,
				});
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	render() {
		const { searchTitle, modules, currentModule, currentIndex } =
			this.state;

		return (
			<div className="list row">
				<div className="col-md-8">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Search by title"
							value={searchTitle}
							onChange={this.onChangeSearchTitle}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								onClick={this.searchTitle}
							>
								Search
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<h4>Modules List</h4>

					<ul className="list-group">
						{modules &&
							modules.map((module, index) => (
								<li
									className={
										'list-group-item ' +
										(index === currentIndex ? 'active' : '')
									}
									onClick={() =>
										this.setActiveModule(module, index)
									}
									key={index}
								>
									{module.title}
								</li>
							))}
					</ul>

					<button
						className="m-3 btn btn-sm btn-danger"
						onClick={this.removeAllModules}
					>
						Remove All
					</button>
				</div>
				<div className="col-md-6">
					{currentModule ? (
						<div>
							<h4>Module</h4>
							<div>
								<label>
									<strong>Title:</strong>
								</label>{' '}
								{currentModule.title}
							</div>
							<div>
								<label>
									<strong>Description:</strong>
								</label>{' '}
								{currentModule.description}
							</div>
							<div>
								<label>
									<strong>Status:</strong>
								</label>{' '}
								{currentModule.published
									? 'Published'
									: 'Pending'}
							</div>

							<Link
								to={'/modules/' + currentModule.id}
								className="badge badge-warning"
							>
								Edit
							</Link>
						</div>
					) : (
						<div>
							<br />
							<p>Please click on a Module...</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}
