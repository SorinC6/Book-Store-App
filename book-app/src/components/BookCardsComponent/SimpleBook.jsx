import React from 'react';
import styled from 'styled-components';
import BookImg from '../../assets/book-cover.png';
import { Link, Route, withRouter } from 'react-router-dom';
import DetailBook from '../DetailBookComponent/DetailBook';

const Container = styled.div`
	border: 1px solid black;
	padding: 20px;
	width: 240px;
	margin-top: 20px;
	border-radius: 10px;
	background: rgba(45, 82, 77, 0.1);

	& :hover {
		transform: scale(1.1);
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
			height: 170px;
		}
	}
`;

const SimpleBook = (props) => {
	const { title, author, id, summary, publisher } = props.book;

	const sendCurrentIdToLOcalStorage = () => {
		localStorage.setItem('CurrentId', id);
		localStorage.setItem('CurrentTitle', title);
		localStorage.setItem('CurrentAuthor', author);
		localStorage.setItem('currentSummary', summary);
		localStorage.setItem('currentPublisher', publisher);
	};

	return (
		// <link to={`home/${id}`}>

		<Container>
			<div className="delete-btn" onClick={() => props.deleteBook(id)}>
				X
			</div>
			<div className="entry">
				<Link to={`/home/${id}`} key={id} onClick={sendCurrentIdToLOcalStorage}>
					<img src={BookImg} alt="title" />
					<h4>{title}</h4>
					<p>By {author}</p>
				</Link>
			</div>

			<Link to="/update-form" onClick={sendCurrentIdToLOcalStorage}>
				Update Book
			</Link>

			{/* <Route path="/home/:id" render={(props) => <DetailBook {...props} book={props.book} />} /> */}
		</Container>
	);
};

export default withRouter(SimpleBook);
