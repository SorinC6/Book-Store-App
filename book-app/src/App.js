import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StartPageView from './views/StartPageView/StartPageView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import HomeView from './views/HomeView/HomeView';
import DetailViewBook from './views/DetailBookView/DetailBookView';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import Footer from './components/FooterComponent/Footer';
import AddFormComponent from './components/FormCoponent/AddFormComponent';
import UpdateFormComponent from './components/FormCoponent/UpdateFormComponent';
import ContactView from './views/ContactComponent/ContactView'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="home-container">
					<Route path="/nav" component={NavigationComponent} />
					<Route exact path="/home" component={HomeView} />
					<Route exact path="/home/:id" render={(props) => <DetailViewBook {...props} />} />
					<Route path="/add-form" component={AddFormComponent} />
					<Route path="/update-form" component={UpdateFormComponent} />
					<Route path="/footer" component={Footer} />
				</div>

				<Route exact path="/" component={StartPageView} />
				<Route path="/login" component={LoginView} />
				<Route path="/register" component={RegisterView} />
            <Route path="/contact" component={ContactView}/>
			</div>
		);
	}
}

export default App;
