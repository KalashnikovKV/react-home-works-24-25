import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
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
} from "./styles";
import Button from "../ButtonComponent/Button";

interface HeaderProps {
  toggleCart?: () => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ toggleCart, cartItemCount }) => {
  const location = useLocation(); 

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Company", path: "/company" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header style={header}>
      <div style={headerContainer}>
        <div style={logo}>
          <Link to="/">
            <img style={logoIcon} src="./src/assets/icons/header/logo.png" alt="Logo" />
          </Link>
        </div>
        <nav style={nav}>
          <ul style={navList}>
            {navItems.map((item) => (
              <li
                key={item.name}
                style={location.pathname === item.path ? activeNavItemStyles : navItemStyles}
              >
                <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={buttonContainer}>
          <Button
            text=""
            onClick={()=>{}}
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
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired,
};

export default Header;
