import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StartPageView from './views/StartPageView/StartPageView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className="nav-container">
					<h2>Nav COntent</h2>
				</nav>

				<div className="home-container" />

				<Route exact path="/" component={StartPageView} />
				<Route path="/login" component={LoginView} />
				<Route path="/register" component={RegisterView} />

				<footer>
					<h2>Footer Content</h2>
				</footer>
			</div>
		);
	}
}

export default App;
