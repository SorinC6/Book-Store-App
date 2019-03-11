import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (userData) => (dispatch) => {
	dispatch({ type: REGISTER_START });
	axios
		.post('https://bookr-app.herokuapp.com/api/register')
		.then((res) => {
			localStorage.setItem('bookUser', userData.username);
			dispatch({ type: REGISTER_SUCCESS, payload: userData.username });
		})
		.catch((err) => dispatch({ type: REGISTER_FAILURE, payload: err.message }));
};
