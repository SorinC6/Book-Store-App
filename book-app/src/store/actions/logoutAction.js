export const LOGOUT = 'LOGOUT';

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
	localStorage.removeItem('token');
	localStorage.removeItem('bookrUser');
};
