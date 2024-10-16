import PropTypes from 'prop-types';
import { itemStyles } from './styles';

const Item = ({ item }) => {
  return <li style={itemStyles}>{item}</li>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
