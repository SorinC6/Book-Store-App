import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, checkCurentLogin } from '../../store/actions/index';
import Login from '../../components/LoginComponent/Login';

const LoginView = (props) => {
	console.log(props);
	return (
		<div>
			<p>Login Views</p>
			<Login login={props.login} isLoggingIn={props.isLoggingIn} isLoggedIn={props.isLoggedIn} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loggedIn,
		isLoggingIn: state.isLoggingIn
	};
};

export default connect(mapStateToProps, { login })(LoginView);
