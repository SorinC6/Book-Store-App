import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
//import Home from '../../views/HomeView/HomeView'

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			userNameInput: '',
			passwordInput: '',
			role: 0,
			inputInvalid: true
		};
	}

	componentDidMount() {
		// console.log("login form is logged in: ", this.props.isLoggedIn);
		if (this.props.isLoggingIn) {
			this.setState({
				inputInvalid: true
			});
		}
	}

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
			this.setState({
				inputInvalid: false
			});
		} else {
			this.setState({
				inputInvalid: true
			});
		}
	};

	handleLogin = (e) => {
		e.preventDefault();
		const userData = {
			username: this.state.userNameInput,
			password: this.state.passwordInput,
			role: this.state.role
      };
      
		try {
         !this.state.inputInvalid && this.props.login(userData);
        // this.props.history.push('./home')
		} catch (err) {
			this.props.history.push('/login');
			console.log('login form error: ', err);
			return;
		}
   };

   
	render() {
      // once logged in, redirect
      console.log(this.props.isLoggedIn)
      localStorage.getItem('bookrUser') && this.props.history.push('/home');
  
      return (
        <>
          <form onSubmit={this.handleLogin} className="inner-container box-container ">
            <input
              type="text"
              placeholder="UserName"
              name="userNameInput"
              value={this.state.userNameInput}
              onChange={this.handleInput}
              autoComplete="off"
              className="login-input "
            />
            <input
              type="password"
              placeholder="Password"
              name="passwordInput"
              value={this.state.passwordInput}
              onChange={this.handleInput}
              autoComplete="off"
              className="login-input "

            />
            <button 
              type="submit" 
              value="Login" 
              disabled={this.state.inputInvalid}
              className="login-btn"
            >
            Login
            </button>
            <Link to="/register">
              <button  className="login-btn">
                Register
              </button>
            </Link>
          </form>

          {
             this.props.isLoggingIn 
            &&
                  <Loader 
                     type="Puff"
                     color="#00BFFF"
                      height="100"	
                     width="100"
                  />   
      
          }
        </>
      );
    }
}

export default withRouter(LoginForm);
