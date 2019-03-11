import React from 'react';
//import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './DetailBook.css';

const DetailBook = (props) => {
	//console.log('Detail ', props);

	let bookSelected = props.books.find((bk) => {
		//console.log(bk.id);
		return `${bk.id}` === props.match.params.id;
	});
	//console.log(props.match.params.id);

	//console.log('Book selected', bookSelected);    summary

	const { title, author, publisher, summary } = bookSelected;

	return (
		<div
			className="rmdb-movieinfo"
			style={{
				background: `url('https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
			}}
		>
			<div className="rmdb-movieinfo-content">
				<div className="rmdb-movieinfo-thumb">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K2k0_aJKpJZ6KD_kh7CUqdbOARMOQ3M6WC2yAr8697N-yIG17A"
						alt=""
					/>
				</div>
				<div className="rmdb-movieinfo-text">
					<h1>{title}</h1>

					<h2>By {author}</h2>
					<h3>Description</h3>
					{summary}
					<h3>Review RATING</h3>

               <h4>Publisher: {publisher}</h4>
					<div className="rmdb-rating">
						<meter min="0" max="100" optimum="100" low="40" high="70" value="23" />
						<p className="rmdb-score">Movie Score</p>
					</div>
					{/* {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
           {directors.map( (element, i) => {
             return <p key={i} className="rmdb-director">{element.name}</p>
           })} */}
				</div>
				<FontAwesome className="fa-film" name="film" size="5x" />
			</div>
		</div>
	);
};

// MovieInfo.propTypes = {
//   books: PropTypes.object,
//   directors: PropTypes.array
// }

export default DetailBook;
