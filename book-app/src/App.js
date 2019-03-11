import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StartPageView from './views/StartPageView/StartPageView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import HomeView from './views/HomeView/HomeView';
import DetailViewBook from './views/DetailBookView/DetailBookView';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className="nav-container">
					<NavigationComponent />
				</nav>

				<div className="home-container" />

				<Route exact path="/" component={StartPageView} />
				<Route path="/login" component={LoginView} />
				<Route path="/register" component={RegisterView} />
				<Route exact path="/home" component={HomeView} />
				<Route path="/home/:id" render={(props) => <DetailViewBook {...props} />} />
				<footer>
					<h2>Footer Content</h2>
				</footer>
			</div>
		);
	}
}

export default App;
