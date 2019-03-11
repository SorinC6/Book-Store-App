import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navBar.css';

const NavigationBar = (props) => (
  <div className="navigation">
    <div className="navigation-content">
      <Link to="/home">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p>{props.book}</p>
    </div>
  </div>
)


export default NavigationBar;