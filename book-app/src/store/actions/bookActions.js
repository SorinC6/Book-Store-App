import axiosWithAuth from "../axios/axios";
//import axios from 'axios';

export const FETCHING_BOOKS_START = "FETCHING_BOOKS_START";
export const FETCHING_BOOKS_SUCCESS = "FETCHING_BOOKS_SUCCESS";
export const FETCHING_BOOKS_FAILURE = "FETCHING_BOOKS_FAILURE";

export const ADDING_BOOK_START = "ADDING_BOOK_START";
export const ADDING_BOOK_SUCCESS = "ADDING_BOOK_SUCCESS";
export const ADDING_BOOK_FAILURE = "ADDING_BOOK_FAILURE";

export const DELETING_BOOK_START = "DELETING_BOOK_START";
export const DELETING_BOOK_SUCCESS = "DELETING_BOOK_SUCCESS";
export const DELETING_BOOK_FAILURE = "DELETING_BOOK_FAILURE";

export const UPDATE_BOOK_START = "UPDATE_BOOK_START";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";

export const getBooks = () => dispatch => {
  dispatch({ type: FETCHING_BOOKS_START });
  axiosWithAuth()
    .get("https://backend-books.herokuapp.com/api/books/")
    .then(res => dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCHING_BOOKS_FAILURE, payload: err.message })
    );
};

export const addBook = book => dispatch => {
  dispatch({ type: ADDING_BOOK_START });
  axiosWithAuth()
    .post("https://backend-books.herokuapp.com/api/books/", book)
    .then(res => dispatch({ type: ADDING_BOOK_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: ADDING_BOOK_FAILURE, payload: err.message })
    );
};

export const deleteBook = id => dispatch => {
  dispatch({ type: DELETING_BOOK_START });
  axiosWithAuth()
    .delete(`https://backend-books.herokuapp.com/api/books/${id}`)
    .then(res => {
      //debugger;
      dispatch({ type: DELETING_BOOK_SUCCESS, payload: id });
    })
    .catch(err =>
      dispatch({ type: DELETING_BOOK_FAILURE, payload: err.message })
    );
};

export const updateBook = (data, id) => dispatch => {
  dispatch({ type: UPDATE_BOOK_START });
  axiosWithAuth()
    .put(`https://backend-books.herokuapp.com/api/books/${id}`, data)
    .then(res => {
      dispatch({ type: UPDATE_BOOK_SUCCESS, payload: data });
      getBooks();
    })
    .catch(err =>
      dispatch({ type: UPDATE_BOOK_FAILURE, payload: err.message })
    );
};
