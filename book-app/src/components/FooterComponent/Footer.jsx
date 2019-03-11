import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.nav`
	max-width: 100%;
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
	height:100px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 2;

	button {
		position: absolute;
		right: 10%;
		padding: 15px;
	}
`;

const Footer = (props) => {
	return (
		<FooterContainer>
		<h1>Footer</h1>
		</FooterContainer>
	);
};

export default Footer;
