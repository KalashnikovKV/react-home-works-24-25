import { useState, ChangeEvent } from "react";
import Button from "../ButtonComponent/Button";
import { addButtonStyles, namePriceContainer, productCardStyles, productDescribtion, productImageStyles, productInfoStyles, productName, productPrice, removeButtonStyles } from "./styles";
import { Product } from "../../utils/types";


interface ProductCardProps {
  product: Product;
  addToCart?: (product: Product) => void;
  isInCart?: boolean;
  onRemove?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart = () => {},
  isInCart = false,
  onRemove = () => {},
}) => {
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div style={productCardStyles}>
      <div style={productImageStyles}>
        <img
          src={product.img}
          alt={product.meal}
          style={{ width: 120, height: 120 }}
        />
      </div>

      <div style={productInfoStyles}>
        <div style={namePriceContainer}>
          <h2 style={productName}>{product.meal}</h2>
          <p style={productPrice}>
            $ {isInCart ? (product.price * quantity).toFixed(2) : (product.price * quantity).toFixed(2)} USD
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

export default ProductCard;
