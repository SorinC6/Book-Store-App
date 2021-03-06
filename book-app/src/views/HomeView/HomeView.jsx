import React from 'react';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from '../../store/actions/index';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import { Spring } from 'react-spring/renderprops';

class HomeView extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}

	deleteBook = (id) => {
		console.log(id);
		this.props.deleteBook(id);
	};
	render() {
		//console.log('Books: Reviews', this.props.books);
		return (
			<div>
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 2000 }}>
					{(props) => (
						<div style={props}>
							<HomeComponent
								books={this.props.books}
								isFetchingBooks={this.props.isFetchingBooks}
								deleteBook={this.deleteBook}
								getBooks={this.props.getBooks}
							/>
						</div>
					)}
				</Spring>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

export default connect(mapStateToProps, { getBooks, deleteBook })(HomeView);
