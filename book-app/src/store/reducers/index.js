import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_TRUE,
	LOGIN_FALSE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../actions/index';

//checking with token later
const user = localStorage.getItem('bookrUser');
const loggedIn = user ? true : false;

const initialState = {
	isRegistering: false,
	isLoggedIn: loggedIn,
	isLoggingIn: false,
	isFetchingBooks: true,
	isAddingBook: false,
	isDeletingBook: false,
	isFetchingReviews: true,
	isPostingReview: false,
	isDeletingReview: false,
	hasLatestBooks: false,
	hasLatestReviews: false,
	error: '',
	userName: user,
	books: [],
	reviews: []
};

const rootReducer = (state = initialState, action) => {
	//console.log(action.type)
	switch (action.type) {
		//====================REGISTER case =============
		case REGISTER_START:
			return {
				...state,
				isRegistering: true,
				error: ''
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isRegistering: false,
				error: '',
				userName: action.payload
			};
		case REGISTER_FAILURE:
			return {
				...state,
				isRegistering: false,
				error: action.payload
			};
		//===================LOGIN case==================
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				error: false
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				userName: action.payload
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				error: action.payload
			};
		case LOGIN_TRUE:
			return {
				...state,
				isLoggedIn: true
			};
		case LOGIN_FALSE:
			return {
				...state,
				isLoggedIn: false
			};
		default:
			return state;
	}
};

export default rootReducer;
