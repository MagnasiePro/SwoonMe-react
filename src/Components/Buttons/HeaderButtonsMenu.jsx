import React from 'react';
import PropTypes from 'prop-types';

const ButtonItem = ({ label, id }) => {
  id;
  return (
    <button className="button-item-container">
      <p>{label}</p>
    </button>
  );
};

const HeaderButtonsMenu = ({ list }) => {
  const HeaderList = list.map((button) => (
    <ButtonItem key={button.id} label={button.label} id={button.id} />
  ));

  return <ul className="header-buttons-menu-container">{HeaderList}</ul>;
};

ButtonItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number
};

HeaderButtonsMenu.propTypes = {
  list: PropTypes.array
};

export default HeaderButtonsMenu;
