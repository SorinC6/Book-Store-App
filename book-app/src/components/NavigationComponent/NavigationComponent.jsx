import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter,Link } from 'react-router-dom';
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
		right: 10%;
		padding: 15px;
		color: red;
	}
`;

const LinkContainer = styled(NavLink)`
      padding:20px 20px;
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

const SettingsBtn = styled.div`
	position: absolute;
	right: 10%;
	padding: 15px;
	color: white;
`;

const Settings = styled.div`
	width: 140px;
	height: 150px;
	/* border: 1px solid white; */
	z-index: 20;
	position: absolute;
	right: 15%;
	margin-top: 110px;

	div {
		margin: 15px;
		cursor: pointer;
		border: 1px solid black;
		padding: 15px;
		border-radius: 50%;
		text-align: center;

		& :hover {
			color: blue;
		}
	}
`;

class NavigationComponent extends React.Component {
	state = {
		settingsHandle: false
	};

	logout = () => {
		this.props.logout();
		this.props.history.push('/');
	};

	toggleSettings = () => {
		this.setState((prevState) => ({
			settingsHandle: !prevState.settingsHandle
		}));
	};

	render() {
		//console.log(this.state.settingsHandle)
		return (
			<NavContainer>
				<LinkContainer to="/home">Home</LinkContainer>
				<LinkContainer to="/contact">About</LinkContainer>
				<LinkContainer to="/contact">Contact</LinkContainer>
				<SettingsBtn onClick={this.toggleSettings}>Settings</SettingsBtn>
				{this.state.settingsHandle && (
					<Settings className="settings-container">
						<div>
							<Link to="/add-form">Add Book</Link>
						</div>
						<div onClick={this.logout}>Logout</div>
					</Settings>
				)}
			</NavContainer>
		);
	}
}

export default withRouter(connect(null, { logout })(NavigationComponent));
