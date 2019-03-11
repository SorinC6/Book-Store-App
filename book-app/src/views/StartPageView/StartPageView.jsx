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

const CostumDiv = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:flex-end;
`

const StartPageView = (props) => {


	return (
		<div style={{ textAlign: 'center', marginTop: '200px' }}>
			<CostumDiv>
				<WrapperLink to="/login">Login</WrapperLink>
				<WrapperLink to="/register">Register</WrapperLink>
			</CostumDiv>

			<div s>
				<Confetti width="600" height="1000" />
			</div>
		</div>
	);
};

export default StartPageView;
