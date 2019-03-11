import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {
	//console.log('Register props ', props);
	return (
		<div>
			<h1>Login Componnent</h1>
			<LoginForm {...props} />
		</div>
	);
};

export default Login;
