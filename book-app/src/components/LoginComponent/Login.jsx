import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const Login = (props) => {
	return (
		<div className="root-container">
			<LoginForm {...props} />
		</div>
	);
};

export default Login;
