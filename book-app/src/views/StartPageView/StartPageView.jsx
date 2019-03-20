import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const WrapperLink = styled(Link)`
   padding:40px;
   font-size:40px;
   text-decoration:none;
   cursor:pointer;

   & :hover {
      color: white;
      background:black
   }
`;

const CostumDiv = styled.div`
	display: flex;
	justify-content: center;
   font-family: 'Jacques Francois Shadow', cursive;
   
`;

const StartPageView = (props) => {
	return (
		<div style={{ textAlign: 'center', marginTop: '23px' }}>
			<CostumDiv>
				<WrapperLink to="/login">Login</WrapperLink>
				<WrapperLink to="/register">Register</WrapperLink>
			</CostumDiv>

			<div>
				<Confetti width="1500" height="500" style={{ zIndex: '1', marginTop: '150px' }} />
			</div>
		</div>
	);
};

export default StartPageView;
