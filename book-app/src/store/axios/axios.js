import axios from 'axios';

export default function() {
	const token = localStorage.getItem('token'); //the token its in localStorage
	//console.log('Axios with Auth Token', token); // its getting the token from the localStorage
	const instance = axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`
		}
	});

	return instance;
}
