import PropTypes from 'prop-types';
import React from 'react';
import {
  header,
  logo,
  nav,
  navList,
  headerContainer,
  logoIcon,
  headerButtonStyle,
  buttonContainer,
  navItemStyles,
  activeNavItemStyles,
} from './styles';
import Button from '../ButtonComponent/Button';

interface HeaderProps {
  setSelectedSection: (section: string) => void;
  selectedSection: string;
  toggleCart: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ setSelectedSection, selectedSection, toggleCart, cartItemCount }) => {
  const navItems = ['Home', 'Menu', 'Company', 'Login'];

  return (
    <header style={header}>
      <div style={headerContainer}>
        <div style={logo}>
          <img style={logoIcon} src="./src/assets/icons/header/logo.png" alt="Logo" />
        </div>
        <nav style={nav}>
          <ul style={navList}>
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setSelectedSection(item)}
                style={selectedSection === item ? activeNavItemStyles : navItemStyles}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div style={buttonContainer}>
          <Button
            text=""
            onClick={toggleCart}
            style={headerButtonStyle}
            icon={<img src="./src/assets/icons/header/frame.png" alt="frame" />}
            cartItemCount={cartItemCount}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
  selectedSection: PropTypes.string.isRequired,
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired,
};

export default Header;
