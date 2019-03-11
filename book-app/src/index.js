import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { LOGIN_SUCCESS } from './store/actions/index';
import rootReducer from './store/reducers/index';

const customMiddlewareToSaveUserToke = (store) => (next) => (action) => {
	//console.log('STOREEEE ',store);
	if (action.type === LOGIN_SUCCESS) {
		//console.log('alabalasa')

		localStorage.setItem('userToken', action.payload);
	}
	next(action);
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, customMiddlewareToSaveUserToke),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
