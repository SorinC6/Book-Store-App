import React from 'react';
import { withRouter } from 'react-router-dom';
import './DetailBook.css';
import NavigationBar from '../NavigationBarComponent/NavigationBar';
import Navigation from '../NavigationComponent/NavigationComponent';
import styled from 'styled-components';
import ReviewList from './ReviewList';
import Footer from '../FooterComponent/Footer';

const CommentDiv = styled.div`
	border: 1px solid #edebeb;
	max-width: 70%;
	margin: 0 auto;
	margin-bottom: 150px;
	border-radius: 10px;
`;

class DetailBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookSelected: [],
			selectedId: this.props.match.params.id,
			currentTitle: '',
			currentAuthor: '',
			currentSummary: '',
			currentPubliser: '',
			//commentList: this.props.reviews,
			comment: ''
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

		const fakeReview = {
			review: 'Testtig',
			rating: 3,
			reviewer: 'first fsd ',
			books_id: this.state.selectedId
		};

      this.props.addReview(fakeReview);
      
      const currentReviewId = this.props.reviewsId
      
		console.log('Current ',currentReviewId);
		this.props.getReviews(currentReviewId[0]);

		this.setState({
			currentTitle: localStorage.getItem('CurrentTitle'),
			currentAuthor: localStorage.getItem('CurrentAuthor'),
			currentSummary: localStorage.getItem('currentSummary'),
			currentPubliser: localStorage.getItem('currentPublisher')
		});
	}

	render() {
		//console.log('State', this.state);
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
							{this.state.currentSummary}
							<h4>Publisher: {this.state.currentPubliser}</h4>
							<h3>Review RATING</h3>

							<div className="rating">
								<meter min="0" max="5" optimum="100" low="40" high="50" value="3" width="200px" />
								{/* <p className="rmdb-score">Book Score</p> */}
							</div>
						</div>
					</div>
				</div>

				<div>
					<CommentDiv>
						<h2 style={{ textAlign: 'center' }}>See the Review for this book</h2>

						<div>
							<ReviewList review={this.props.reviews} />
						</div>
					</CommentDiv>
				</div>
				<Footer />
			</div>
		);
	}
}

// MovieInfo.propTypes = {
//   books: PropTypes.object,
//   directors: PropTypes.array
// }

export default withRouter(DetailBook);
