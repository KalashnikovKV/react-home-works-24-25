import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  header,
  headerDark,
  logo,
  nav,
  navList,
  headerContainer,
  logoIcon,
  headerButtonStyle,
  headerButtonDarkMode,
  buttonContainer,
  navItemStyles,
  navItemStylesDarkMode,
  activeNavItemStyles,
} from "./styles";
import Button from "../ButtonComponent/Button";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../redux/reducers/cartReducer";
import { useTheme } from "../../screens/Theme/ThemeContext";

const Header = () => {
  const location = useLocation();
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Company", path: "/company" },
    { name: "Login", path: "/login" },
  ];

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header style={theme === "light" ? header : headerDark}>
      <div style={headerContainer}>
        <div style={logo}>
          <Link to='/'>
            <img
              style={logoIcon}
              src='./src/assets/icons/header/logo.png'
              alt='Logo'
            />
          </Link>
        </div>

        <nav style={nav}>
          <ul style={navList}>
            {navItems.map((item) => (
              <li
                key={item.name}
                style={
                  theme === "light"
                    ? location.pathname === item.path
                      ? activeNavItemStyles
                      : navItemStyles
                    : location.pathname === item.path
                    ? activeNavItemStyles
                    : navItemStylesDarkMode
                }
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={buttonContainer}>
          <Button
            text=''
            onClick={handleCartClick}
            style={headerButtonStyle}
            icon={<img src='./src/assets/icons/header/frame.png' alt='frame' />}
            cartItemCount={totalItems}
          />
        </div>
        <Button
          text={theme === "light" ? "Dark Mode" : "Light Mode"}
          onClick={toggleTheme}
          style={headerButtonDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
