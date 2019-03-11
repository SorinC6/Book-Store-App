import React from 'react';
import styled from 'styled-components';
import BookImg from '../../assets/book-cover.png';
//import { Link } from 'react-router-dom';

const Container = styled.div`
	margin: 20px;
	display: block;
	width: 200px;
	height: 350px;
	transform: translateY(-30px);
	border-style: double;
	border-radius: 10px;
	border-color: purple;

	.entry {
		margin: 30px 10px;
		padding: 20px 20px;
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			width: 200px;
			height: 150px;
		}
	}
`;

const SimpleBook = (props) => {
	const { title, author, id } = props.book;

	return (
		// <Link to={`home/${id}`}>
		<Container>
			<div className="entry">
				<img src={BookImg} alt="title" />
				<h4>{title}</h4>
				<p>By {author}</p>
			</div>
		</Container>
		// </Link>
	);
};

export default SimpleBook;
