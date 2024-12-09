import PropTypes from 'prop-types';
import { badgeStyles } from './styles';

const Button = ({ text, icon, onClick, style, cartItemCount }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(53, 184, 190, 0.15)' }}
        onClick={onClick}
      >
        {icon && <span>{icon}</span>} 
        {text}
      </button>
      

      {cartItemCount > 0 && (
        <span style={badgeStyles}>{cartItemCount}</span>
      )}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  style: PropTypes.object,
  cartItemCount: PropTypes.number,
};

Button.defaultProps = {
  icon: null,
  onClick: () => {},
  style: {},
  cartItemCount: 0,
};

export default Button;
