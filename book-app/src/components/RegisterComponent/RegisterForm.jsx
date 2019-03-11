import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
	state = {
		userNameInput: '',
		passwordInput: '',
		passwordConfirmInput: '',
		role: 0,
		inputInvalid: true
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
   };

   validateInput = () => {
      
   }
   


	render() {
		console.log('Register form props:', this.props);
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
			</React.Fragment>
		);
	}
}

export default RegisterForm;
