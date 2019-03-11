import React from 'react';
import styled from 'styled-components';
import BookImg from '../../assets/book-cover.png';
//import { Link } from 'react-router-dom';

const Container = styled.div`
	border: 1px solid black;
	padding: 35px;
	width: 240px;
	margin-top: 20px;
	border-radius: 10px;
	background: rgba(45, 82, 77, 0.1);

	& :hover {
		transform: scale(1.13);
		transition: 0.25s ease-in-out;
		color: purple;
	}

	.entry {
		margin: 30px 10px;
		padding: 20px 20px;
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;

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
