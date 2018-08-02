/* eslint-disable react/jsx-one-expression-per-line,
   jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import $ from 'jquery';

class ThemeSwitcher extends Component {
	state = { theme: null }

	resetTheme = (evt) => {
		evt.preventDefault();
		this.setState({ theme: null });
	}

	chooseTheme = (theme, evt) => {
		evt.preventDefault();
		this.setState({ theme });
	}

	myClicker = (event) => {
		event.preventDefault();
		$('#exampleModal').modal('show');
	}

	render() {
		const { theme } = this.state;

		// Default them of "secondary"
		const themeClass = theme ? theme.toLowerCase() : 'secondary';

		return (
			<Fragment>
				<div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">

					<span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>

					<div className="btn-group">

						<button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>

						<button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span className="sr-only">Toggle Theme Dropdown</span>
						</button>

						<div className="dropdown-menu">
							<a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
							<a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
							<a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>

							<div className="dropdown-divider" />

							<a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>

							<div className="dropdown-divider" />
							<button type="button" className={`dropdown-item btn btn-${themeClass} btn-lg`} onClick={this.myClicker} aria-haspopup="true" aria-expanded="false">
								Show Modal
							</button>
						</div>
					</div>
				</div>

				{/* The div for a modal window */}
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								This is the modal body area
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ThemeSwitcher;
