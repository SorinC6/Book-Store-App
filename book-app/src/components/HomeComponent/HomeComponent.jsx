import React from 'react';
import Loader from 'react-loader-spinner';
import SimpleBook from '../BookCardsComponent/SimpleBook';
import styled from 'styled-components';
import NavigationComponent from '../NavigationComponent/NavigationComponent';
import HeaderImgHeader from '../HeaderImgComponent/HeaderImg';
import Footer from '../FooterComponent/Footer';
import './HomeComponent.css';

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
		return (
			<div style={{ backgroundImage: 'linear-gradient(#C6FFDD, #FBD786)' }}>
				<header>
					<nav className="nav-container">
						<NavigationComponent />
					</nav>
					<HeaderImgHeader />
				</header>

				<ContainerList>
					{this.props.isFetchingBooks ? (
						<Loader type="Puff" color="#00BFFF" height="100" width="100" />
					) : (
						this.props.books.map((book) => {
							return <SimpleBook key={book.id} book={book} {...this.props} />;
						})
					)}
				</ContainerList>

				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		isDeleting: state.isDeletingBook,
// 		error: state.error
// 	};
// };

export default HomeComponent;
