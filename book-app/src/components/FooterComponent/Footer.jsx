import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.nav`
	max-width: 100%;
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
	height: 130px;
	display: flex;
	justify-content: center;
	align-items: center;
	position:relative;
	bottom: 0;
	width: 100%;
	z-index: 2;

	h1 {
		font-size: 16px;
		font-family: 'Cardo', serif;
	}

	input {
		margin-left: 20px;
	}

	p {
		position: absolute;
		bottom: 0;
		font-size: 10px;
	}
`;

const Footer = (props) => {
	return (
		<FooterContainer>
			<h1>
				Enter your email{' '}
				<span>
					<input placeholder="email..." />
				</span>
			</h1>

			<p>Copyright Chis Sorin</p>
		</FooterContainer>
	);
};

export default Footer;
