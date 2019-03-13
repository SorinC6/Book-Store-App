import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Name = styled.div`
	max-width: 50%;
	margin: 0 auto;
	font-weight: bold;
	font-size: 15px;
	padding: 0;
	margin-left: 4px;
`;

const Text = styled.span`
	font-weight: normal;
	font-size: 15px;
	margin: 0;
`;

const Icons = styled.div`
	div {
		margin-top: 10px;
		margin-left: 20px;
		font-size: 30px;
	}
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	height: 60px;
	border-top: 1px dashed #edebeb;

	input {
		width: 100%;
		border: 0;
		padding: 15px 0;
		font-size: 14px;
		outline: none;
		padding-left: 20px;
	}
	i {
		font-size: 30px;
		margin-right: 10px;
	}
`;

const CostumDiv = styled.div``;

const Comment = (props) => {
	//console.log('Review Props', props);

	const [ totalReviews, setTotalReview ] = useState(`${props.review.reviewer}`);
	const [ reviewCount, setReviewCount ] = useState(0);
	const [ comments, setComments ] = useState('');

	//console.log('Likes: ', totalLikes);

	const addReviewFeetback = () => {
		console.log(' pressed');
		if (reviewCount === 0) {
			setTotalReview(totalReviews + 1);
			setReviewCount(reviewCount + 1);
		} else if (reviewCount === 1) {
			setTotalReview(totalReviews - 1);
			setReviewCount(reviewCount - 1);
		}
	};

	useEffect(() => {
		localStorage.setItem('com', comments);
	});

	const submitContent = (e) => {
		e.preventDefault();
		props.addReview();
	};

	const handleChanges = (e) => {
		setComments(e.target.value);
	};

	console.log(comments);
	return (
		<CostumDiv>
			<Icons>
				<div
					className={reviewCount === 0 ? 'far fa-thumbs-up' : 'fas fa-thumbs-up'}
					onClick={addReviewFeetback}
				/>
			</Icons>
			<Name>
				<p>Username: {props.review.reviewer} </p>
				<Text>Review: {props.review.review}</Text>
			</Name>

			<h2 style={{ textAlign: 'center' }}>Add a review</h2>

			<div>
				<Form onSubmit={submitContent}>
					<input
						onChange={handleChanges}
						onSubmit={submitContent}
						name="comment"
						placeholder="add a review..."
					/>
					<i onClick={submitContent} className="fas fa-arrow-circle-left" />
				</Form>
			</div>
		</CostumDiv>
	);
};

export default Comment;
