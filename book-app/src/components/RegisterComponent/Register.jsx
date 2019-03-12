import React from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';
import { Spring } from 'react-spring/renderprops';

const Register = (props) => {
	//console.log('Register props ', props);
	return (
		<div className="root-container">
			<RegisterForm {...props} />
		</div>
	);
};

export default Register;
