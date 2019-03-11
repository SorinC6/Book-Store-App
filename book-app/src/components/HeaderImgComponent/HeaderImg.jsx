import React from 'react';
import PropTypes from 'prop-types';
import './HeaderImg.css';

const HeroImage = ({ image, title, text }) => (
  <div className="rmdb-heroimage"
    style={{
      background:
        `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80'), #1c1c1c`
    }}
  >
    <div className="rmdb-heroimage-content">
      <div className="rmdb-heroimage-text">
        <h1>Lambbda Buld Week Project</h1>
        <p>My book ...</p>
      </div>
    </div>
  </div>
)

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default HeroImage;