import PropTypes from 'prop-types';

const Button = ({ text, icon = null, onClick = () => {}, style = {} }) => {
  return (
    <button style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none'}} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element, 
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;

