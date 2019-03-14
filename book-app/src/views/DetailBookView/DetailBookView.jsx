import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, addReview, getReviews, deleteReview } from '../../store/actions/index';
import DetailBook from '../../components/DetailBookComponent/DetailBook';

class DetalilBookView extends Component {
	componentDidMount() {
		this.props.getBooks();
		this.props.getReviews();
	}
	render() {
		//console.log(this.props);
		return (
			<div>
				{this.props.reviews.length > 0 && (
					<DetailBook
						{...this.props}
						addReview={this.props.addReview}
						getReviews={this.props.getReviews}
						reviews={this.props.reviews}
						reviewsId={this.props.reviewsId}
						deleteReview={this.props.deleteReview}
						isPostingReview={this.props.isPostingReview}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		isFetchingBooks: state.isFetchingBooks,
		reviews: state.reviews,
		reviewsId: state.reviewsId,
		isPostingReview: state.isPostingReview
	};
};

export default connect(mapStateToProps, { getBooks, addReview, getReviews, deleteReview })(DetalilBookView);
