import React from 'react';
// import PropTypes from 'prop-types';
import './HeaderImg.css';

const HeaderImg = () => (
	<div
		className="heroimage"
		style={{
			background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('https://images.unsplash.com/3/alejandroescamilla-book.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80'), #1c1c1c`
		}}
	>
		<div className="heroimage-content">
			<div className="heroimage-text">
				<h1>Lambbda Build Week Project</h1>
				<p>
					The world is a book, and those who do not travel read only a page
				</p>
			</div>
		</div>
	</div>
);

export default HeaderImg;
