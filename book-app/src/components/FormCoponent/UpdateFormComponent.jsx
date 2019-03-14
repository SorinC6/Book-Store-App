import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook, getBooks } from '../../store/actions/index';
import styled from 'styled-components';
import Navigation from '../NavigationComponent/NavigationComponent';
import Footer from '../FooterComponent/Footer';
import './AddBook.css';

const FromWrapper = styled.div`
	display: flex;
	width: 400px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-evenly;
	padding-bottom: 110px;

	input {
		background-color: #fff;
		font-size: 21px;
		height: 50px;
		width: 300px;
		padding: 0 8px;
		color: #1c5d76;
		align-items: center;
		margin: 20px;
	}
`;

const ButtonWrapper = styled.button`
	text-align: center;
	text-decoration: none;
	border-style: double;
	padding: 20px;
`;

const emptyBook = {
	title: '',
	author: '',
	publisher: '',
	summary: ''
};

class UpdateFromComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: emptyBook
		};
	}

	componentDidMount() {
		this.pupulateBookFields();
		this.props.getBooks();
	}
	handleChanges = (e) => {
		this.setState({
			book: {
				...this.state.book,
				[e.target.name]: e.target.value
			}
		});
	};

	pupulateBookFields = () => {
		let id = localStorage.getItem('CurrentId');

		this.setState({
			book: this.props.books.find((book) => book.id == id)
		});
	};

	updateBook = (e) => {
		e.preventDefault();
		let id = localStorage.getItem('CurrentId');

		const data = {
			title: this.state.book.title,
			author: this.state.book.author,
			publisher: this.state.book.publisher,
			summary: this.state.book.summary
		};

		!this.props.isFetchingBooks && this.props.updateBook(data, id);
		//this.props.getBooks()
		this.props.getBooks();

		if (!this.props.isUpdatingBook) {
			this.props.getBooks();
		}
		this.props.history.push('./home');
	};

	render() {
		//console.log(this.props.books)
		return (
			<div className="form-container background">
				<Navigation />
				<h1 style={{ textAlign: 'center', marginTop: '10px' }}>Update Book</h1>
				<FromWrapper onSubmit={this.updateBook} className="update">
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="title"
						placeholder="book title..."
						value={this.state.book && this.state.book.title}
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="author"
						placeholder="author ..."
						value={this.state.book && this.state.book.author}
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="publisher"
						placeholder="publiser..."
						value={this.state.book && this.state.book.publisher}
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="summary"
						placeholder="summary..."
						value={this.state.book && this.state.book.summary}
					/>
					<ButtonWrapper className="button-style" onClick={this.updateBook}>
						Update Book
					</ButtonWrapper>
				</FromWrapper>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		isUpdatingBook: state.isUpdatingBook,
		isFetchingBooks: state.isisFetchingBooks
		// isAddingBook: state.isAddingBook,
		// error: state.error
	};
};

export default connect(mapStateToProps, { updateBook, getBooks })(UpdateFromComponent);
