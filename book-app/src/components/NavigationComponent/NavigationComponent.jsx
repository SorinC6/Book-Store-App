import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/logoutAction';

const NavContainer = styled.nav`
	max-width: 100%;
	background: #1c1c1c;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;

	button {
		position: absolute;
		right: 10%;
		padding: 15px;
	}
`;

const LinkContainer = styled(NavLink)`
      padding:20px 0px;
      color:white;
      font-weight:bold;
      font-size:20px;
      text-decoration:none

      &:hover{
			transform: scale(1.4);
			transition: 0.25s ease-in-out;
			color: white;
		
      }
`;

const NavigationComponent = (props) => {
	const logout = () => {
		props.logout();
		props.history.push('/');
	};
	return (
		<NavContainer>
			<LinkContainer to="/home">Home</LinkContainer>
			<LinkContainer to="/contact">About</LinkContainer>
			<LinkContainer to="/contact">Contact</LinkContainer>
			<button onClick={logout}>Logout</button>
		</NavContainer>
	);
};

export default withRouter(connect(null, { logout })(NavigationComponent));
