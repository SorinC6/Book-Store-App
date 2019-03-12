import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../store/actions/index';

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
      console.log(this.state.newBook)
      this.props.addBook(this.state.newBook)
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

const mapStateToProps = state => {
   return{
      isAddingBook:state.isAddingBook,
      error:state.error
   }
}

export default connect(mapStateToProps, { addBook })(AddFormComponent);
