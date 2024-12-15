import { useState } from "react";
import ProductCard from "../ProductCardContainer/ProductCard";
import Button from "../ButtonComponent/Button";
import { buttonContainerStyles, cartContainerStyles, inputStyles } from "./styles";

interface CartItem {
  id: number;
  img: string;
  meal: string;
  description: string;
  instructions: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const [street, setStreet] = useState<string>("");
  const [house, setHouse] = useState<string>("");

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
          {cartItems.map((item) => (
            <ProductCard
              key={item.id}
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
          </div >
          <div style={buttonContainerStyles}>
            <Button text="Place Order" onClick={handleOrder} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;