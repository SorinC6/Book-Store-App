import React from 'react';
import { Link } from 'react-router-dom';

const StartPageView = (props) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</div>
	);
};

export default StartPageView;
