import PropTypes from 'prop-types';
import Item from './Item'; 
import { itemListStyles } from './styles';

const ItemList = ({ items }) => {
  return (
    <ul style={itemListStyles}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemList;
