import React, { Component } from 'react';

export default class AddFormComponent extends Component {
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
			newSmurf: {
				...this.state.newBook,
				[e.target.name]: e.target.value
			}
		});
	};

	addBook = (e) => {
		e.preventDefault();
		//this.props.addSmurf(this.state.newSmurf);
	};

	render() {
		return (
			<div className="form-container">
         
				<h1>Add a book to Collection</h1>
				<form onSubmit={this.addBook}>
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
					<button className="button-style">Submit Book</button>
				</form>
			</div>
		);
	}
}
