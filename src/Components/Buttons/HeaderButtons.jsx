import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles/header.css';
import { FiUser, FiShoppingBag } from 'react-icons/fi';

const HeaderButtons = ({ label, iconName }) => {
  const iconList = {
    user: <FiUser className="button-icon" />,
    basket: <FiShoppingBag className="button-icon" />
  };
  return (
    <button className="button-icon-container">
      {iconList[iconName]}
      <p className="label">{label}</p>
    </button>
  );
};

HeaderButtons.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string
};

export default HeaderButtons;
