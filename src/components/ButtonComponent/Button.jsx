import PropTypes from 'prop-types';
import { buttonStyles } from './styles';

const Button = ({ text, onClick = () => {} }) => {
  return (
    <button style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
