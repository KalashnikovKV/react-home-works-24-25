import PropTypes from 'prop-types';
import {
  headerStyles,
  logoStyles,
  navStyles,
  navListStyles,
} from './styles';
import Button from '../ButtonComponent/Button';

const Header = ({ setSelectedSection, toggleCart, cartItemCount }) => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>Logo</div>
      <nav style={navStyles}>
        <ul style={navListStyles}>
          <li onClick={() => setSelectedSection('Home')}>Home</li>
          <li onClick={() => setSelectedSection('Menu')}>Menu</li>
          <li onClick={() => setSelectedSection('Company')}>Company</li>
          <li onClick={() => setSelectedSection('Login')}>Login</li>
        </ul>
      </nav>
      <Button text={`🛒 ${cartItemCount}`} onClick={toggleCart} />
    </header>
  );
};

Header.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired,
};

export default Header;
