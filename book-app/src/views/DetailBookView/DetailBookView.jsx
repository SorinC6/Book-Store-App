import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../store/actions/index';
import DetailBook from '../../components/DetailBookComponent/DetailBook';

class DetalilBookView extends Component {

   componentDidMount(){
      this.props.getBooks();
   }
	render() {
		return (
			<div>
				<h1>DetailBook Component</h1>
				<DetailBook books={this.props.books} {...this.props}/>
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

export default connect(mapStateToProps, { getBooks })(DetalilBookView);
