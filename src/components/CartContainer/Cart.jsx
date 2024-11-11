import  { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCardContainer/ProductCard';
import { cartContainerStyles, inputStyles, buttonContainerStyles } from './styles';
import Button from '../ButtonComponent/Button';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      house: ''
    };
  }

  handleOrder = () => {
    const { street, house } = this.state;
    alert(`Order placed! Address: ${street}, ${house}`);
  };

  handleStreetChange = (event) => {
    this.setState({ street: event.target.value });
  };

  handleHouseChange = (event) => {
    this.setState({ house: event.target.value });
  };

  render() {
    const { cartItems, removeFromCart } = this.props;
    const { street, house } = this.state;

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
                onChange={this.handleStreetChange}
                style={inputStyles}
              />
              <input
                type="text"
                placeholder="House"
                value={house}
                onChange={this.handleHouseChange}
                style={inputStyles}
              />
            </div>
            <div style={buttonContainerStyles}>
              <Button text="Place Order" onClick={this.handleOrder} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

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
