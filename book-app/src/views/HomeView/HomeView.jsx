import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../store/actions/index';

class HomeView extends React.Component {
	componentDidMount() {
      
		this.props.getBooks();
	}
	render() {
		console.log('Books: ', this.props.books);
		return (
			<div>
				<p>Home View</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	};
};

export default connect(mapStateToProps, { getBooks })(HomeView);
