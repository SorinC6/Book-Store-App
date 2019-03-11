import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Link, withRouter } from 'react-router-dom';

class RegisterForm extends Component {
	state = {
		userNameInput: '',
		passwordInput: '',
		passwordConfirmInput: '',
		role: 0,
		inputInvalid: true
	};

	handleInput = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value
			},
			() => this.validateInput()
		);
	};

	validateInput = () => {
		if (this.state.userNameInput && this.state.passwordInput) {
			if (this.state.passwordInput === this.state.passwordConfirmInput) {
				this.setState({ inputInvalid: false });
			} else {
				this.setState({ inputInvalid: true });
			}
		} else {
			this.setState({ inputInvalid: true });
		}
	};

	handleRegister = (e) => {
		e.preventDefault();

		const userData = {
			username: this.state.userNameInput,
			password: this.state.passwordInput,
			role: this.state.role
		};

		//console.log(userData);

		try {
			this.state.userNameInput && this.props.register(userData);
			//this.props.history.push('/home');
		} catch (err) {
			console.log(err);
		}
	};
	render() {
      //console.log('Register form props:', this.props);
      localStorage.getItem('bookUser') && this.props.history.push('/login')
		return (
			<React.Fragment>
				<form onSubmit={this.handleRegister} className="inner-container box-container ">
					<input
						type="text"
						placeholder="UserName"
						name="userNameInput"
						value={this.state.userNameInput}
						onChange={this.handleInput}
						autoComplete="off"
						//className="login-input"
					/>
					<input
						type="password"
						placeholder="Password"
						name="passwordInput"
						value={this.state.passwordInput}
						onChange={this.handleInput}
						autoComplete="off"
						//className="login-input"
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						name="passwordConfirmInput"
						value={this.state.passwordConfirmInput}
						onChange={this.handleInput}
						autoComplete="off"
						//className="login-input"
					/>
					<button type="submit" value="Register" disabled={this.state.inputInvalid} className="login-btn">
						Register
					</button>
					<Link to="/login">
						<button className="login-btn">Login</button>
					</Link>
				</form>
				{this.props.isRegistering && <Loader type="Puff" color="#00BFFF" height="100" width="100" />}
			</React.Fragment>
		);
	}
}

export default withRouter(RegisterForm);
