import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{ 
    background: color,
    height: 400, 
    width: 400, 
    borderRadius: 20
  }}>{ }</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
