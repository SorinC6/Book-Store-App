import React from 'react';
import styled from 'styled-components';
import BookImg from '../../assets/book-cover.png';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
	/* border: 1px solid #F8F0F0; */
	padding: 20px;
	width: 240px;
	margin-top: 0;
	background: rgba(45, 82, 77, 0.1);
	text-align: center;
	margin: 2px;
	margin-bottom: 20px;

	.link {
		font-weight: bold;
		color: black;
	}

	.entry {
		margin: 20px 10px;
		padding: 20px 20px;
		box-shadow: 19px 3px 15px rgba(0, 2, 1, 0.4);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		font-family: 'Hind', sans-serif;
		color: blue;
		background: linear-gradient(to bottom, #33ccff 0%, #ffcc66 100%);
		border-radius: 10%;

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

		<Container>
			<div className="delete-btn" onClick={() => props.deleteBook(id)}>
				<i class="fas fa-ban" />
			</div>
			<div className="entry">
				<Link to={`/home/${id}`} key={id} onClick={sendCurrentIdToLOcalStorage}>
					<img src={BookImg} alt="title" />
					<h4>{title}</h4>
					<p>By {author}</p>
				</Link>
			</div>

			<Link to="/update-form" onClick={sendCurrentIdToLOcalStorage} className="link">
				<p style={{fontFamily:'Cardo'}}>Update Book</p>
			</Link>
		</Container>
	);
};

export default withRouter(SimpleBook);
