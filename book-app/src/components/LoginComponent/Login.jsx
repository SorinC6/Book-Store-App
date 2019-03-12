import React from 'react';
import LoginForm from './LoginForm';
import './Login.css'
import { Spring } from 'react-spring/renderprops'


const Login = (props) => {
	//console.log('Register props ', props);
	return (
		<div className="root-container">
			<LoginForm {...props} />
		</div>
	);
};

export default Login;
