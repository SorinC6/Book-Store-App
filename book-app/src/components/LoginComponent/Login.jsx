import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const Login = (props) => {
	return (
		<div className="root-container">
			<h2 className="text-intro">Login</h2>
			<LoginForm {...props} />
		</div>
	);
};

export default Login;
