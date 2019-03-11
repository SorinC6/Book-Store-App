import React from 'react';
import Loader from 'react-loader-spinner';
import SimpleBook from '../BookCardsComponent/SimpleBook';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
   padding: 20px 90px;
   margin-top:100px;
   padding-top:40px;
`;

class HomeComponent extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<ContainerList>
					{this.props.isFetchingBooks ? (
						<Loader type="Puff" color="#00BFFF" height="100" width="100" />
					) : (
						this.props.books.map((book) => {
							return (
								<Link to={`/home/${book.id}`} key={book.id}>
									<SimpleBook key={book.id} book={book} />
								</Link>
							);
						})
					)}
				</ContainerList>
			</div>
		);
	}
}

export default HomeComponent;
