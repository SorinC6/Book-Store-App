import React from 'react';
import { withRouter } from 'react-router-dom';
import './DetailBook.css';
import NavigationBar from '../NavigationBarComponent/NavigationBar';
import Navigation from '../NavigationComponent/NavigationComponent';
import styled from 'styled-components';
import Footer from '../FooterComponent/Footer';

const CommentDiv = styled.div`
	border: 1px solid #edebeb;
	max-width: 70%;
	margin: 0 auto;
	margin-bottom: 150px;
	border-radius: 10px;

	h2 {
		padding: 10px;
		cursor: pointer;
		&:hover {
			background-color: black;
			color: white;
		}
	}
`;

const Name = styled.div`
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

const Form = styled.form`
	display: flex;
	align-items: center;
	height: 60px;
	border-top: 1px dashed #edebeb;
	position: relative;
	input {
		border-radius: 10px;

		&:focus {
			background-color: #f6efef;
		}
	}

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
		right: 0;
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
			comment: '',
			totalLikes: '',
			likeCount: '',
			visible: false
		};
	}

	componentDidMount() {
		this.props.getReviews();

		this.filterReviews();

		this.setState({
			currentTitle: localStorage.getItem('CurrentTitle'),
			currentAuthor: localStorage.getItem('CurrentAuthor'),
			currentSummary: localStorage.getItem('currentSummary'),
			currentPubliser: localStorage.getItem('currentPublisher')
		});
	}

	filterReviews = () => {
		const getSelectedReview = this.props.reviews.filter((rv) => {
			return rv.books_id == this.state.selectedId;
		});

		this.setState({
			selectedReviews: getSelectedReview
		});
		this.props.getReviews();
	};

	addReview = (e) => {
		e.preventDefault();
		const review = {
			review: this.state.comment,
			rating: 3,
			reviewer: localStorage.getItem('userToken'),
			books_id: this.state.selectedId
		};

		!this.props.isPostingReview && this.props.addReview(review);
		this.filterReviews();

		this.setState({
			comment: ''
		});
	};

	handleChanges = (e) => {
		this.setState({
			comment: e.target.value
		});
	};
	deleteReview = (id) => {
		console.log('delete');
		this.props.deleteReview(id);
		console.log(id);
	};

	handleVsible = () => {
		console.log('click');
		this.setState({ visible: !this.state.visible });
	};

	render() {
		console.log(this.state.visible);
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
						<h2 style={{ textAlign: 'center' }} onClick={this.handleVsible}>
							See the Review for this book
						</h2>

						<div className={this.state.visible ? 'book-comments' : 'book-none'}>
							<CostumDiv>
								<Name>
									{this.state.selectedReviews &&
										this.state.selectedReviews.map((rv) => {
											return (
												<div key={rv.id}>
													<p className="username">Username: {rv.reviewer}</p>
													<Text>Review: {rv.review} </Text>
													<i
														className="far fa-trash-alt icon"
														onClick={() => this.deleteReview(rv.id)}
													/>
												</div>
											);
										})}
								</Name>

								<h2 style={{ textAlign: 'center' }} />

								<div>
									<Form onSubmit={this.addReview}>
										<input
											onChange={this.handleChanges}
											onSubmit={this.addReview}
											name="comment"
											placeholder="add a review..."
											value={this.state.comment}
										/>
										<i onClick={this.addReview} className="fas fa-arrow-circle-left" />
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
