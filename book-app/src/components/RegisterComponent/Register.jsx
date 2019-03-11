import React from 'react';
import RegisterForm from './RegisterForm';

const Register = (props) => {
	//console.log('Register props ', props);
	return (
		<div>
			<h1>Register Componnent</h1>
			<RegisterForm {...props} />
		</div>
	);
};

export default Register;
