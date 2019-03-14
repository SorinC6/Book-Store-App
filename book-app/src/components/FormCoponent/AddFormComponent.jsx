import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../store/actions/index';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Navigation from '../NavigationComponent/NavigationComponent';
import Footer from '../FooterComponent/Footer';
import './AddBook.css';

const FromWrapper = styled.form`
	display: flex;
	width: 400px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-evenly;

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

class AddFormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newBook: {
				title: '',
				author: '',
				publisher: '',
				summary: ''
			}
		};
	}
	handleChanges = (e) => {
		this.setState({
			newBook: {
				...this.state.newBook,
				[e.target.name]: e.target.value
			}
		});
	};

	addBook = (e) => {
		e.preventDefault();
		//console.log(this.state.newBook);
		this.props.addBook(this.state.newBook);
		this.props.history.push('/home');
	};

	render() {
		return (
			<div className="form-container background">
				<Navigation />
				<h1 style={{ textAlign: 'center', marginTop: '20px' }}>Add a book to Collection</h1>
				<FromWrapper onSubmit={this.addBook} className="add">
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
					<ButtonWrapper type="submit" className="button-style">
						Submit Book
					</ButtonWrapper>
				</FromWrapper>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAddingBook: state.isAddingBook,
		error: state.error
	};
};

export default withRouter(connect(mapStateToProps, { addBook })(AddFormComponent));
