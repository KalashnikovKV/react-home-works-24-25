import { useState } from 'react';
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

const ProductCard = ({ product, addToCart, isInCart, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

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
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              <Button text="Add to Cart" onClick={handleAddToCart} style={addButtonStyles} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

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
