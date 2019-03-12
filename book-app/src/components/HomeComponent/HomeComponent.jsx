import React from 'react';
import Loader from 'react-loader-spinner';
import SimpleBook from '../BookCardsComponent/SimpleBook';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import NavigationComponent from '../NavigationComponent/NavigationComponent';
import HeaderImgHeader from '../HeaderImgComponent/HeaderImg';
import Footer from '../FooterComponent/Footer';
import { Spring } from 'react-spring/renderprops';
import './HomeComponent.css';
import AddFormComponent from '../FormCoponent/AddFormComponent';

const ContainerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 20px 150px;
	margin-top: 100px;
	padding-top: 40px;
	padding-bottom: 150px;
`;

class HomeComponent extends React.Component {
	render() {
		//console.log(this.props);
		return (
			<div style={{ backgroundImage: 'linear-gradient(#C6FFDD, #FBD786)' }}>
				<header>
					<nav className="nav-container">
						<NavigationComponent />
					</nav>
					<HeaderImgHeader />
				</header>

				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 3000 }}>
					{(props) => (
						<div style={props}>
							<ContainerList>
								{this.props.isFetchingBooks ? (
									<Loader type="Puff" color="#00BFFF" height="100" width="100" />
								) : (
									this.props.books.map((book) => {
										return (
											<Link to={`/home/${book.id}`} key={book.id}>
												<SimpleBook key={book.id} book={book} />
											</Link>
										);
									})
								)}
							</ContainerList>
						</div>
					)}
				</Spring>

         
            
				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}

export default HomeComponent;
