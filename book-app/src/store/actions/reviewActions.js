import axiosWithAuth from '../axios/axios';

export const FETCHING_REVIEWS_START = 'FETCHING_REVIEWS_START';
export const FETCHING_REVIEWS_SUCCESS = 'FETCHING_REVIEWS_SUCCESS';
export const FETCHING_REVIEWS_FAILURE = 'FETCHING_REVIEWS_FAILURE';

export const POSTING_REVIEW_START = 'POSTING_REVIEW_START';
export const POSTING_REVIEW_SUCCESS = 'POSTING_REVIEW_SUCCESS';
export const POSTING_REVIEW_FAILURE = 'POSTING_REVIEW_FAILURE';

export const DELETING_REVIEW_START = 'DELETING_REVIEW_START';
export const DELETING_REVIEW_SUCCESS = 'DELETING_REVIEW_SUCCESS';
export const DELETING_REVIEW_FAILURE = 'DELETING_REVIEW_FAILURE';

export const getReviews = (id) => (dispatch) => {
	dispatch({ type: FETCHING_REVIEWS_START });
	axiosWithAuth()
		.get(`http://localhost:7111/api/reviews/${id}`)
		.then((res) => dispatch({ type: FETCHING_REVIEWS_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCHING_REVIEWS_FAILURE, payload: err.message }));
};

export const addReview = (data) => (dispatch) => {
   dispatch({ type: POSTING_REVIEW_START });
   console.log('data send',data)
	axiosWithAuth()
		.post('http://localhost:7111/api/reviews', data)
		.then((res) => dispatch({ type: POSTING_REVIEW_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: POSTING_REVIEW_FAILURE, payload: err.message }));
};
