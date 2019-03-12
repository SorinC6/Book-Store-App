import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './DetailBook.css';
import NavigationBar from '../NavigationBarComponent/NavigationBar';
import Navigation from '../NavigationComponent/NavigationComponent';

class DetailBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookSelected: [],
			selectedId: this.props.match.params.id,
			currentTitle: '',
			currentAuthor: ''
		};
	}

	componentDidMount() {
		// console.log('Booookk ', this.props.books);
		// const selectedBook = this.props.books.filter((book) => {
		// 	//console.log(book.id);
		// 	//console.log(this.state.selectedId);
		// 	return `${book.id}` === this.state.selectedId;
		// });
		// console.log('selected book ', selectedBook);
		// this.setState({
		// 	bookSelected: selectedBook
		// });
		// const { id, title, author } = this.state.selectedId;
		// this.setState({
		// 	selectedTitle: title
		// });


		const fakeReview = { review: 'fgfd dfgdfg', rating: 'pgfd dfass gfdf', reviewer: 'first fsd ', books_id: 1 };

      this.props.addReview(fakeReview);

      this.props.getReviews(this.state.selectedId);


		this.setState({
			currentTitle: localStorage.getItem('CurrentTitle'),
			currentAuthor: localStorage.getItem('CurrentAuthor')
		});
	}

	setSelectedBook = (selectedB) => {
		this.setState({
			bookSelected: selectedB
		});
	};

	render() {
		console.log('State', this.state);
		console.log('Props: ', this.props);

		return (
			<div>
				<div>
					<Navigation />
				</div>

				<div
					className="book-info"
					style={{
						padding: '50px',
						background: `url('https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
					}}
				>
					<NavigationBar book={this.state.currentTitle} />
					<div className="book-content">
						<div className="thumb">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K2k0_aJKpJZ6KD_kh7CUqdbOARMOQ3M6WC2yAr8697N-yIG17A"
								alt=""
							/>
						</div>
						<div className="text">
							<h1>{this.state.currentTitle}</h1>

							<h2>By {this.state.currentAuthor}</h2>
							<h3>Description</h3>
							{this.state.bookSelected.summary}
							<h3>Review RATING</h3>

							<h4>Publisher: {this.state.bookSelected.publisher}</h4>
							<div className="rating">
								<meter min="0" max="100" optimum="100" low="40" high="70" value="23" />
								<p className="rmdb-score">Book Score</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h1>Review COntent</h1>
				</div>
			</div>
		);
	}
}

// MovieInfo.propTypes = {
//   books: PropTypes.object,
//   directors: PropTypes.array
// }

export default withRouter(DetailBook);
