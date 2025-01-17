import { useState } from "react";
import Button from "../ButtonComponent/Button";
import {
  addButtonStyles,
  namePriceContainer,
  productCardStyles,
  productDescribtion,
  productImageStyles,
  productInfoStyles,
  productName,
  productPrice,
  removeButtonStyles,
} from "./styles";
import { Product } from "../../utils/types";
import { useDispatch } from "react-redux";
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
} from "../../redux/reducers/cartReducer";

interface ProductCardProps {
  product: Product;
  isInCart?: boolean;
  onRemove?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInCart = false,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    if (isInCart) {
      dispatch(addToCartAction({ ...product, quantity: newQuantity }));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCartAction({ ...product, quantity }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartAction(product.id));
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
            $ {(product.price * quantity).toFixed(2)} USD
          </p>
        </div>
        <p style={productDescribtion}>{product.instructions}</p>

        <div style={{ display: "flex", alignItems: "center" }}>
          {isInCart ? (
            <>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              <Button
                text="Remove"
                onClick={handleRemoveFromCart}
                style={removeButtonStyles}
              />
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
              <Button
                text="Add to Cart"
                onClick={handleAddToCart}
                style={addButtonStyles}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
