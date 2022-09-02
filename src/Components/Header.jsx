import React from 'react';

import '../Styles/header.css';
import logo from '../Assets/Images/logo.png';

import SearchBar from './Inputs/SearchBar';
import HeaderButtons from './Buttons/HeaderButtons';
import HeaderButtonsMenu from './Buttons/HeaderButtonsMenu';

const Header = () => {
  const headerButtonList = [
    {
      id: 1,
      label: 'Promos'
    },
    {
      id: 2,
      label: 'Vos futur jouets'
    },
    {
      id: 3,
      label: 'Les petits nouveaux'
    },
    {
      id: 4,
      label: 'Les plus 🔥'
    }
  ];
  return (
    <header className="header">
      <div className="top">
        <div className="logo-container">
          <img src={logo} fit="contain" width="100" height="100" />
          <h1 className="logoTitle">SwoonMe</h1>
        </div>
        <SearchBar />
        <div className="header-button-container">
          <HeaderButtons iconName="user" label="Profil" />
          <HeaderButtons iconName="basket" label="Mon panier" />
        </div>
      </div>
      <div className="bottom">
        <HeaderButtonsMenu list={headerButtonList} />
      </div>
    </header>
  );
};

export default Header;
