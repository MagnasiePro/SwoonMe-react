import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header';

const Default = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Default.propTypes = {
  children: PropTypes.element
};

export default Default;
