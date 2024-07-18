import React, { Component } from 'react';
import ModuleService from '../services/module.service';
import { withRouter } from '../common/with-router';

class Module extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getModule = this.getModule.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateModule = this.updateModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.state = {
            currentModule: {
                id: null,
                title: '',
                description: '',
                published: false,
            },
            message: '',
        };
    }

    componentDidMount() {
        this.getModule(this.props.router.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentModule: {
                    ...prevState.currentModule,
                    title: title,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentModule: {
                ...prevState.currentModule,
                description: description,
            },
        }));
    }

    getModule(id) {
        ModuleService.get(id)
            .then((response) => {
                this.setState({
                    currentModule: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentModule.id,
            title: this.state.currentModule.title,
            description: this.state.currentModule.description,
            published: status,
        };

        ModuleService.update(this.state.currentModule.id, data)
            .then((response) => {
                this.setState((prevState) => ({
                    currentModule: {
                        ...prevState.currentModule,
                        published: status,
                    },
                }));
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateModule() {
        ModuleService.update(
            this.state.currentModule.id,
            this.state.currentModule,
        )
            .then((response) => {
                console.log(response.data);
                this.setState({
                    message: 'The module was updated successfully!',
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    deleteModule() {
        ModuleService.delete(this.state.currentModule.id)
            .then((response) => {
                console.log(response.data);
                this.props.router.navigate('/modules');
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentModule } = this.state;

        return (
            <div>
                {currentModule ? (
                    <div className="edit-form">
                        <h4>Module</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentModule.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentModule.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentModule.published
                                    ? 'Published'
                                    : 'Pending'}
                            </div>
                        </form>

                        {currentModule.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(true)}
                            >
                                Publish
                            </button>
                        )}

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteModule}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateModule}
                        >
                            Update
                        </button>

                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Module...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Module);
