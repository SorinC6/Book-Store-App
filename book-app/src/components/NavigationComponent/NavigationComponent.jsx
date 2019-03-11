import React from 'react';
import styled from 'styled-components';
import { NavLink ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/logoutAction';

const NavContainer = styled.nav`
	max-width: 100%;
	height: 100px;
	background: purple;
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
      padding:20px;
      color:black;
      font-weight:bold;
      font-size:20px;
`;



const NavigationComponent = (props) => {

   const logout = () =>{
      props.logout();
      props.history.push('/')
   }
	return (
		<NavContainer>
			<LinkContainer to="/home">Home</LinkContainer>
			<LinkContainer to="/contact">Contact</LinkContainer>
			<button onClick={logout}>Logout</button>
		</NavContainer>
	);
};

export default withRouter(connect(null, { logout })(NavigationComponent));
