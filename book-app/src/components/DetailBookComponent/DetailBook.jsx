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

const Name = styled.div`
	max-width: 50%;
	margin: 0 auto;
	font-weight: bold;
	font-size: 15px;
	padding: 0;
	margin-left: 4px;
`;

const Text = styled.span`
	font-weight: normal;
	font-size: 15px;
	margin: 0;
`;

const Icons = styled.div`
	div {
		margin-top: 10px;
		margin-left: 20px;
		font-size: 30px;
	}
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	height: 60px;
	border-top: 1px dashed #edebeb;

	input {
		width: 100%;
		border: 0;
		padding: 15px 0;
		font-size: 14px;
		outline: none;
		padding-left: 20px;
	}
	i {
		font-size: 30px;
		margin-right: 10px;
	}
`;

const CostumDiv = styled.div``;
class DetailBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookSelected: [],
			selectedId: this.props.match.params.id,
			currentTitle: '',
			currentAuthor: '',
			currentSummary: '',
			selectedReviews: [],
			currentPubliser: '',
			//commentList: this.props.reviews,
			comment: ''
		};

		const empty = this.props.reviews.find((rv) => rv.id == this.state.selectedId);


	}

	componentDidMount() {
		// debugger;
		this.props.getReviews();

		const selectedR = this.props.reviews.find((rv) => rv.id == this.state.selectedId);
		console.log();

		//console.log(this.state.selectedReviews);

		this.setState({
			currentTitle: localStorage.getItem('CurrentTitle'),
			currentAuthor: localStorage.getItem('CurrentAuthor'),
			currentSummary: localStorage.getItem('currentSummary'),
			currentPubliser: localStorage.getItem('currentPublisher')
		});
	}

	addReview = () => {
		const fakeReview = {
			review: localStorage.getItem('com'),
			rating: 3,
			reviewer: localStorage.getItem('userToken'),
			books_id: this.state.selectedId
		};

		//this.props.addReview(fakeReview);
		//this.props.reviews.concat(fakeReview)
	};

	submitContent = (e) => {
		e.preventDefault();
	};

	handleChanges = (e) => {
		this.setState({
			comment: e.target.value
		});
	};
	render() {
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
							<CostumDiv>
								{/* <Icons>
									<div
										className={reviewCount === 0 ? 'far fa-thumbs-up' : 'fas fa-thumbs-up'}
										onClick={addReviewFeetback}
									/>
                        </Icons> */}
								{console.log(this.empty)}
								<Name>
									{/* {this.state.selectedReviews && this.state.selectedReviews.map((rv) => {
										return (
											<div>
												<p>Username: </p>
												<Text>Review: </Text>
											</div>
										);
									})} */}
								</Name>

								<h2 style={{ textAlign: 'center' }}>Add a review</h2>

								<div>
									<Form onSubmit={this.submitContent}>
										<input
											onChange={this.handleChanges}
											onSubmit={this.submitContent}
											name="comment"
											placeholder="add a review..."
										/>
										<i onClick={this.submitContent} className="fas fa-arrow-circle-left" />
									</Form>
								</div>
							</CostumDiv>
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
