import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/logoutAction';
import './Nav.css';
import HambPic from '../../assets/hamb.png';

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
	z-index: 10;
	/* position: relative; */

	img {
		width: 50px;
		color: white;
		background-color: white;
		position: absolute;
		left: 1%;
		border-radius: 50%;
		display: none;
		&:hover {
			transform: rotate(360deg);
		}
		@media (max-width: 500px) {
			display: block;
		}
	}

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
	cursor: pointer;
	&:hover {
		transform: scale(1.4);
		transition: 0.25s ease-in-out;
		color: white;
	}

	@media (max-width: 500px) {
		display: none;
	}
`;

const Settings = styled.div`
	width: 140px;
	height: 150px;
	/* border: 1px solid white; */
	z-index: 20;
	position: absolute;
	margin-top: 90px;
	right: 7%;

	div {
		margin: 15px;
		cursor: pointer;
		border: 1px solid black;
		padding: 15px;
		border-radius: 50%;
		text-align: center;
		right: 0;
		background: black;
		color: white;

		& :hover {
			transform: scale(1.05);
			transition: 0.25s ease-in-out;
			color: purple;
		}
	}
`;

class NavigationComponent extends React.Component {
	state = {
		settingsHandle: false,
		showMenu: false
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

	showMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu
		});
	};

	render() {
		//console.log(this.state.showMenu);
		return (
			<NavContainer>
				<img src={HambPic} alt="hamburger" onClick={this.showMenu} />
				<div className={this.state.showMenu ? 'menu' : 'display-none'}>
					<LinkContainer to="/home">Home</LinkContainer>
					<LinkContainer to="/contact">About</LinkContainer>
					<LinkContainer to="/contact">Contact</LinkContainer>
					<Link to="/add-form" className="add-btn">
						Add Book
					</Link>
					<div onClick={this.logout} className="logout-btn">
						Logout
					</div>
				</div>
				<LinkContainer to="/home">Home</LinkContainer>
				<LinkContainer to="/contact">About</LinkContainer>
				<LinkContainer to="/contact">Contact</LinkContainer>
				<SettingsBtn onClick={this.toggleSettings}>Settings</SettingsBtn>

				<div className={this.state.settingsHandle ? 'settings' : 'none'}>
					<Settings className="settings-container">
						<div>
							<Link to="/add-form" style={{ color: 'white' }}>
								Add Book
							</Link>
						</div>
						<div onClick={this.logout}>Logout</div>
					</Settings>
				</div>
			</NavContainer>
		);
	}
}

export default withRouter(connect(null, { logout })(NavigationComponent));
