import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const WrapperLink = styled(Link)`
   padding:40px;
   font-size:20px;
   text-decoration:none;
   cursor:pointer;

   & :hover {
      color: white;
      background:black
   }
`;

const StartPageView = (props) => {


	return (
		<div style={{ textAlign: 'center', marginTop: '200px' }}>
			<div>
				<WrapperLink to="/login">Login</WrapperLink>
				<WrapperLink to="/register">Register</WrapperLink>
			</div>

			<div s>
				<Confetti width="600" height="1000" />
			</div>
		</div>
	);
};

export default StartPageView;
