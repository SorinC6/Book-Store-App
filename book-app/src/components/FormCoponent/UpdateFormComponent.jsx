import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../store/actions/index';
import styled from 'styled-components';
import Navigation from '../NavigationComponent/NavigationComponent';
import Footer from '../FooterComponent/Footer';

const FromWrapper = styled.div`
	display: flex;
	width: 400px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0 20px;

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
	// created_at:'',
	// updated_at:''
};

class UpdateFromComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: emptyBook
			//currentId: localStorage.getItem('CurrentId')
		};
	}

	componentDidMount() {
		this.props.getBooks();
		this.pupulateBookFields();
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
		console.log(id);
		console.log(this.props.books);
		this.setState({
			book: this.props.books.filter((book) => book.id === id)
		});
		console.log('Why Empty?? ', this.state.book);
		//this.props.history.push('/home');
	};

	render() {
		return (
			<div className="form-container">
				<Navigation />
				<h1 style={{ textAlign: 'center', marginTop: '80px' }}>Update Book</h1>
				<FromWrapper onSubmit={this.addBook}>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="title"
						placeholder="book title..."
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="author"
						placeholder="author ..."
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="publisher"
						placeholder="publiser..."
					/>
					<input
						className="input-style"
						onChange={this.handleChanges}
						type="text"
						name="summary"
						placeholder="summary..."
					/>
					<ButtonWrapper className="button-style">Update Book</ButtonWrapper>
				</FromWrapper>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
		// isAddingBook: state.isAddingBook,
		// error: state.error
	};
};

export default connect(mapStateToProps, { getBooks })(UpdateFromComponent);
