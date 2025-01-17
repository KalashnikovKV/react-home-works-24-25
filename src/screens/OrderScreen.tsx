import { useState } from "react";
import ProductCard from "../components/ProductCardContainer/ProductCard";
import Button from "../components/ButtonComponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/reducers/cartReducer";
import Footer from "../components/FooterContainer/Footer";
import Header from "../components/HeaderContainer/Header";

export const orderContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  color: "black",
};

export const orderItemStyles: React.CSSProperties = {
  padding: "10px",
  margin: "5px 0",
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  width: "100%",
  textAlign: "left",
};

export const buttonContainerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

export const orderButtonStyles: React.CSSProperties = {
  marginTop: 19,
  marginBottom: 234,
  marginLeft: 8,
  width: 147,
  height: 45,
  borderRadius: 6,
  background: "#35B8BE",
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "0.36px",
};

export const buttonStyles: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export const divOrderInput: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  height: 45,
  marginBottom: 25,
};

export const inputOrderInput: React.CSSProperties = {
  width: 430,
  height: 45,
  borderRadius: "6px",
  border: "1px solid #DDD",
  backgroundColor: "#FFF",
  color: "#000",
  textAlign: "left",
  paddingLeft: 15,
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "27px",
};

export const h2Order: React.CSSProperties = {
  marginTop: 154,
  marginBottom: 46,
  color: " #35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "55px",
  letterSpacing: "1.65px",
};

const Order = () => {
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const handleOrder = () => {
    alert(`Order placed! Address: ${street}, ${house}`);
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Header />
      <div style={orderContainerStyles}>
        <h2 style={h2Order}>Finish your order</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div style={{ marginBottom: 16 }} key={item.id}>
                <ProductCard
                  product={item}
                  isInCart={true}
                  onRemove={() => handleRemoveFromCart(item.id)}
                />
              </div>
            ))}
            <div style={{ marginTop: "20px" }}>
              <div style={divOrderInput}>
                <label>Street</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  style={inputOrderInput}
                />
              </div>
              <div style={divOrderInput}>
                <label>House</label>
                <input
                  type="text"
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                  style={inputOrderInput}
                />
              </div>
            </div>
            <div style={buttonContainerStyles}>
              <Button text="Order" onClick={handleOrder} style={orderButtonStyles} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Order;
