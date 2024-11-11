import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  namePriceContainer,
  productCardStyles,
  productImageStyles,
  productInfoStyles,
  addButtonStyles,
  removeButtonStyles,
  productName,
  productDescribtion,
  productPrice,
} from './styles';
import Button from '../ButtonComponent/Button';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleAddToCart = () => {
    const { addToCart, product } = this.props;
    const { quantity } = this.state;
    addToCart({ ...product, quantity });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: Number(event.target.value) });
  };

  render() {
    const { product, isInCart, onRemove } = this.props;
    const { quantity } = this.state;

    return (
      <div style={productCardStyles}>
        <div style={productImageStyles}>
          <img src={product.img} alt={product.meal} style={{ width: 120, height: 120 }} />
        </div>
        <div style={productInfoStyles}>
          <div style={namePriceContainer}>
            <h2 style={productName}>{product.meal}</h2>
            <p style={productPrice}>
              $ {isInCart ? (product.price * product.quantity).toFixed(2) : (product.price * quantity).toFixed(2)} USD
            </p>
          </div>
          <p style={productDescribtion}>{product.instructions}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isInCart ? (
              <>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  readOnly
                  className="quantity-input"
                />
                <Button text="Remove" onClick={onRemove} style={removeButtonStyles} />
              </>
            ) : (
              <>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={this.handleQuantityChange}
                  className="quantity-input"
                />
                <Button text="Add to Cart" onClick={this.handleAddToCart} style={addButtonStyles} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    meal: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  addToCart: PropTypes.func,
  isInCart: PropTypes.bool,
  onRemove: PropTypes.func,
};

ProductCard.defaultProps = {
  addToCart: () => {},
  isInCart: false,
  onRemove: () => {},
};

export default ProductCard;
