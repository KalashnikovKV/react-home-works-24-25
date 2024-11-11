import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  badgeStyles
} from './styles';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    style: PropTypes.object,
    cartItemCount: PropTypes.number,
  };

  static defaultProps = {
    icon: null,
    onClick: () => {},
    style: {},
    cartItemCount: 0,
  };

  render() {
    const { text, icon, onClick, style, cartItemCount } = this.props;

    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
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
  }
}

export default Button;
