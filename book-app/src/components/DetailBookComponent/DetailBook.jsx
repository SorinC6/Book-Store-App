import React from 'react';

import './DetailBook.css';
import NavigationBar from '../NavigationBarComponent/NavigationBar';
import Navigation from '../NavigationComponent/NavigationComponent';

const DetailBook = (props) => {
	let bookSelected = props.books.find((bk) => {
		//console.log(bk.id);
		return `${bk.id}` === props.match.params.id;
	});
	//console.log(props.match.params.id);
	//console.log('Book selected', bookSelected);    summary

	const { title, author, publisher, summary } = bookSelected;

	return (
		<div>
			<div >
            <Navigation/>
         </div>
			<div
				className="book-info"
				style={{
					padding: '50px',
					background: `url('https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
				}}
			>
				<NavigationBar book={title} />
				<div className="book-content">
					<div className="thumb">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K2k0_aJKpJZ6KD_kh7CUqdbOARMOQ3M6WC2yAr8697N-yIG17A"
							alt=""
						/>
					</div>
					<div className="text">
						<h1>{title}</h1>

						<h2>By {author}</h2>
						<h3>Description</h3>
						{summary}
						<h3>Review RATING</h3>

						<h4>Publisher: {publisher}</h4>
						<div className="rating">
							<meter min="0" max="100" optimum="100" low="40" high="70" value="23" />
							<p className="rmdb-score">Book Score</p>
						</div>
					</div>
					{/* <FontAwesome className="fa-film" name="film" size="5x" /> */}
				</div>
			</div>
		</div>
	);
};

// MovieInfo.propTypes = {
//   books: PropTypes.object,
//   directors: PropTypes.array
// }

export default DetailBook;
