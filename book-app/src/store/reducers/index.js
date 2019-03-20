import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_TRUE,
	LOGIN_FALSE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	FETCHING_BOOKS_START,
	FETCHING_BOOKS_SUCCESS,
	FETCHING_BOOKS_FAILURE,
	LOGOUT,
	ADDING_BOOK_START,
	ADDING_BOOK_SUCCESS,
	ADDING_BOOK_FAILURE,
	DELETING_BOOK_START,
	DELETING_BOOK_SUCCESS,
	DELETING_BOOK_FAILURE,
	FETCHING_REVIEWS_START,
	FETCHING_REVIEWS_SUCCESS,
	FETCHING_REVIEWS_FAILURE,
	POSTING_REVIEW_START,
	POSTING_REVIEW_SUCCESS,
	POSTING_REVIEW_FAILURE,
	UPDATE_BOOK_START,
	UPDATE_BOOK_SUCCESS,
	UPDATE_BOOK_FAILURE,
	DELETING_REVIEW_START,
	DELETING_REVIEW_FAILURE,
	DELETING_REVIEW_SUCCESS
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
	isUpdatingBook: false,
	reviewsId: '',
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
		// =======================FETCHING BOOKS case ============
		case FETCHING_BOOKS_START:
			return {
				...state,
				isFetchingBooks: true,
				error: ''
			};
		case FETCHING_BOOKS_SUCCESS:
			//console.log('action.payload', action.payload);
			return {
				...state,
				isFetchingBooks: false,
				error: '',
				books: action.payload
			};
		case FETCHING_BOOKS_FAILURE:
			return {
				...state,
				isFetchingBooks: false,
				error: action.payload
			};
		//=============================LOGOUT case ================
		case LOGOUT:
			return {
				...state,
				userName: '',
				error: ''
			};
		// ============================ADD BOOK case =================
		case ADDING_BOOK_START:
			//console.log('starttt')
			return {
				...state,
				isAddingBook: true,
				error: ''
			};
		case ADDING_BOOK_SUCCESS:
			return {
				...state,
				isAddingBook: false,
				error: '',
				books: action.payload
			};
		case ADDING_BOOK_FAILURE:
			return {
				...state,
				isAddingBook: false,
				error: action.payload
			};
		// =============================DELETE Book case ==================
		case DELETING_BOOK_START:
			return {
				...state,
				isDeletingBook: true,
				error: ''
			};
		case DELETING_BOOK_SUCCESS:
			//debugger;
			return {
				...state,
				isDeletingBook: false,
				error: '',
				books: state.books.filter((bk) => bk.id !== action.payload)
			};
		case DELETING_BOOK_FAILURE:
			return {
				...state,
				isDeletingBook: false,
				error: action.payload
			};
		//===============================FETCHING REVIEW case ===============
		case FETCHING_REVIEWS_START:
			return {
				...state,
				isFetchingReviews: true,
				error: ''
			};
		case FETCHING_REVIEWS_SUCCESS:
			return {
				...state,
				isFetchingReviews: false,
				reviews: action.payload
			};
		case FETCHING_REVIEWS_FAILURE:
			return {
				...state,
				isFetchingReviews: false,
				error: action.payload
			};
		// ===============================POSTING REVIEW case =======================
		case POSTING_REVIEW_START:
			return {
				...state,
				isPostingReview: true,
				error: ''
			};
      case POSTING_REVIEW_SUCCESS:
			//debugger;
			return {
				...state,
				isPostingReview: false,
				reviews: action.payload
			};
		case POSTING_REVIEW_FAILURE:
			return {
				...state,
				isPostingReview: false,
				error: action.payload
			};
		//=============================UPDATE book case===============================
		case UPDATE_BOOK_START:
			return {
				...state,
				isUpdating: true,
				error: ''
			};
		case UPDATE_BOOK_SUCCESS:
			return {
				...state,
				isUpdating: false,
				//
				error: ''
			};
		case UPDATE_BOOK_FAILURE:
			return {
				...state,
				error: action.payload,
				isUpdating: false
			};
		//===============================DELETE REVIEW case ==================
		case DELETING_REVIEW_START:
			return {
				...state,
				isDeletingReview: true,
				error: ''
			};
		case DELETING_REVIEW_SUCCESS:
			return {
				...state,
				isDeletingReview: false,
				reviews: state.reviews((rv) => rv.id !== action.payload),

				error: ''
			};
		case DELETING_REVIEW_FAILURE:
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
				isDeletingReview: false
			};
		default:
			return state;
	}
};

export default rootReducer;
