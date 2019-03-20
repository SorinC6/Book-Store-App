import React from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';
// import { Spring } from 'react-spring/renderprops';

const Register = (props) => {
	//console.log('Register props ', props);
	return (
		<div className="root-container">
			<h1 className="text-intro">Register</h1>
			<RegisterForm {...props} />
		</div>
	);
};

export default Register;
