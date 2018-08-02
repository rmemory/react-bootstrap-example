/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

class LoginForm extends Component {
	myEventHandler = (event) => {
		event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<form action="action_page.php">
					{/* <div className="imgcontainer">
						<img src="img_avatar2.png" alt="Avatar" className="avatar" />
					</div> */}

					<div className="form-group row">
						<label className="col-sm-2 col-form-label" htmlFor="uname">Username</label>
						<div className="col-sm-10">
							<input className="form-control" type="text" placeholder="Username" name="uname" required />
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-2 col-form-label" htmlFor="psw">Password</label>
						<div className="col-sm-10">
							<input className="form-control" type="password" placeholder="Password" name="psw" required />
						</div>
					</div>

					<div className="container">
						<div className="form-group">
							<div clasName="form-check form-check-inline">
								<label htmlFor="remember" className="mr-2">Remember me</label>
								<input type="checkbox" id="remember" value="option2" />
							</div>

							<div>
								<span className="psw">Forgot
									<a href="/"> password?</a>
								</span>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default LoginForm;
