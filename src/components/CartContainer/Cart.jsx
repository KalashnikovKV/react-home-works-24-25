import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCardContainer/ProductCard';
import { cartContainerStyles, inputStyles, buttonContainerStyles } from './styles';
import Button from '../ButtonComponent/Button';

const Cart = ({ cartItems, removeFromCart }) => {
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');

  const handleOrder = () => {
    alert(`Order placed! Address: ${street}, ${house}`);
  };

  return (
    <div style={cartContainerStyles}>
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <ProductCard
              key={index}
              product={item}
              isInCart={true}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              style={inputStyles}
            />
            <input
              type="text"
              placeholder="House"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              style={inputStyles}
            />
          </div>
          <div style={buttonContainerStyles}>
            <Button text="Place Order" onClick={handleOrder} />
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
