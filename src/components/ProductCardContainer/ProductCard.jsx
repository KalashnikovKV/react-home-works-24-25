import { useState } from 'react';
import PropTypes from 'prop-types';
import { namePriceContainer,productCardStyles, productImageStyles, productInfoStyles, quantityInputStyles, addButtonStyles, removeButtonStyles, productName, productDescribtion, productPrice } from './styles';
import Button from '../ButtonComponent/Button';

const ProductCard = ({ product, addToCart = () => {}, isInCart = false, onRemove = () => {} }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };
  return (
    <div style={productCardStyles}> 
      <div style={productImageStyles}>
        <img src={product.image} alt={product.name} style={{ width: 120, height: 120 }} />
      </div>
      <div style={productInfoStyles}>
        <div style={namePriceContainer}>
          <h2 style={productName}>{product.name}</h2>
          <p style={productPrice}>
          $ {isInCart ? (product.price * product.quantity).toFixed(2) : (product.price * quantity).toFixed(2)} USD
        </p>
        </div>
        <p style={productDescribtion}>{product.description}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {isInCart ? (
              <>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  readOnly
                  style={quantityInputStyles}
                />
                <Button text="Remove" onClick={onRemove} style={removeButtonStyles} />
              </>
            ) : (
              <>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  style={quantityInputStyles}
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
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  addToCart: PropTypes.func,
  isInCart: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default ProductCard;
