import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, addReview, getReviews } from '../../store/actions/index';
import DetailBook from '../../components/DetailBookComponent/DetailBook';

class DetalilBookView extends Component {
	componentDidMount() {
		this.props.getBooks();
	}
	render() {
		//console.log(this.props)
		return (
			<div>
				<h1>DetailBook Component</h1>
				<DetailBook
					books={this.props.books}
					{...this.props}
					addReview={this.props.addReview}
					getReviews={this.props.getReviews}
               reviews={this.props.reviews}
               reviewsId={this.props.reviewsId}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		isFetchingBooks: state.isFetchingBooks,
		reviews: state.reviews,
		reviewsId: state.reviewsId
	};
};

export default connect(mapStateToProps, { getBooks, addReview, getReviews })(DetalilBookView);
