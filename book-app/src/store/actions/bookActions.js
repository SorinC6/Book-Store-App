import axiosWithAuth from '../axios/axios';
//import axios from 'axios';

export const FETCHING_BOOKS_START = 'FETCHING_BOOKS_START';
export const FETCHING_BOOKS_SUCCESS = 'FETCHING_BOOKS_SUCCESS';
export const FETCHING_BOOKS_FAILURE = 'FETCHING_BOOKS_FAILURE';

export const ADDING_BOOK_START = 'ADDING_BOOK_START';
export const ADDING_BOOK_SUCCESS = 'ADDING_BOOK_SUCCESS';
export const ADDING_BOOK_FAILURE = 'ADDING_BOOK_FAILURE';

export const DELETING_BOOK_START = 'DELETING_BOOK_START';
export const DELETING_BOOK_SUCCESS = 'DELETING_BOOK_SUCCESS';
export const DELETING_BOOK_FAILURE = 'DELETING_BOOK_FAILURE';

export const getBooks = () => (dispatch) => {
	dispatch({ type: FETCHING_BOOKS_START });
	axiosWithAuth()
		.get('http://localhost:7111/api/books/')
		.then((res) => dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCHING_BOOKS_FAILURE, payload: err.message }));
};

export const addBook = (book) => (dispatch) => {
	dispatch({ type: ADDING_BOOK_START });
	axiosWithAuth()
		.post('http://localhost:7111/api/books/', book)
		.then((res) => dispatch({ type: ADDING_BOOK_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: ADDING_BOOK_FAILURE, payload: err.message }));
};

export const deleteBook = (id) => (dispatch) => {
	dispatch({ type: DELETING_BOOK_START });
	axiosWithAuth()
		.delete(`http://localhost:7111/api/books/${id}`)
		.then((res) => {
			debugger;
			dispatch({ type: DELETING_BOOK_SUCCESS, payload: id });
		})
		.catch((err) => dispatch({ type: DELETING_BOOK_FAILURE, payload: err.message }));
};
