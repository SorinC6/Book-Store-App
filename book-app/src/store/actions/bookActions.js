import axiosWithAuth from '../axios/axios';
//import axios from 'axios';

export const FETCHING_BOOKS_START = 'FETCHING_BOOKS_START';
export const FETCHING_BOOKS_SUCCESS = 'FETCHING_BOOKS_SUCCESS';
export const FETCHING_BOOKS_FAILURE = 'FETCHING_BOOKS_FAILURE';

export const getBooks = () => (dispatch) => {
	dispatch({ type:FETCHING_BOOKS_START });
	axiosWithAuth()
		.get('http://localhost:7111/api/books')
		.then((res) => dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCHING_BOOKS_FAILURE, payload: err.message }));
};
