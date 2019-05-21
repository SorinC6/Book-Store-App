import React from 'react';
import Nav from '../../components/NavigationComponent/NavigationComponent';
import Footer from '../../components/FooterComponent/Footer';
import './Style.css';

const ContactView = () => {
	return (
		<div className="container">
			<Nav />
			<div className="name-pres">
				<h1 className="name">Chis Sorin</h1>
				<h2 className="desc">Lambda School Student</h2>
			</div>
			<div className="social-icon">
				<a href="#s" class="fa fa-facebook" />
				<a href="#s" class="fa fa-twitter" />
				<a href="#s" class="fa fa-google" />
				<a href="#s" class="fa fa-linkedin" />
			</div>
			<Footer />
		</div>
	);
};

export default ContactView;
