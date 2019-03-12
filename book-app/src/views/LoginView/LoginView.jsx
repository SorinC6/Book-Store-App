import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/index';
import Login from '../../components/LoginComponent/Login';
import { Spring } from 'react-spring/renderprops'


const LoginView = (props) => {
	console.log(props);
	return (
		<div>
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
