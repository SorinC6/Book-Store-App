import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../store/actions/index';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

class HomeView extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}
	render() {
		//console.log('Books: ', this.props.books);
		return (
			<div>
				<HomeComponent books={this.props.books} isFetchingBooks={this.props.isFetchingBooks} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		isFetchingBooks: state.isFetchingBooks
	};
};

export default connect(mapStateToProps, { getBooks })(HomeView);
