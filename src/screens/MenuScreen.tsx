import React, { useState } from "react";
import Button from "../components/ButtonComponent/Button";
import Section from "../components/SectionContainer/Section";
import Footer from "../components/FooterContainer/Footer";
import Header from "../components/HeaderContainer/Header";
import { CartItem } from "../utils/types";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "../redux/cartSlice";

const containerMenu: React.CSSProperties = {
  textAlign: "center",
  minWidth: 1200,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5FBFC",
  color: "black",
  flexDirection: "column",
};

const menuDescribe: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: 670,
  height: 159,
  marginTop: 140,
};

const hMenu: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  width: 442,
  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 50,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 1.65,
};

const pMenu: React.CSSProperties = {
  width: 466,
  color: "#546285",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0.36,
};

const phoneTooltip: React.CSSProperties = {
  position: "relative",
  cursor: "pointer",
  textDecoration: "none",
  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0.36,
};

const phoneTooltipHover: React.CSSProperties = {
  content: '"123-456-7890"',
  position: "absolute",
  bottom: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#333",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "4px",
  whiteSpace: "nowrap",
  marginBottom: "5px",
  zIndex: 1,
};

const menuPageFilterButtonsContainer = {
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 1200,
  height: 52,
};

const menuPageFilterButtons = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 456,
  height: 52,
};

const menuPageButtons = {
  width: 132,
  height: 52,
  borderRadius: 6,
  border: "1px solid rgba(97, 114, 131, 0.20)",
  color: "#222",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  backgroundColor: "#FFF",
};

interface Product {
  id: number;
  img: string;
  meal: string;
  instructions: string;
  price: number;
  description?: string;
  quantity?: number;
  category?: string | null;
}

const MenuScreen: React.FC = ({  }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltipVisibility = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };
  
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    const cartItem: CartItem = {
      ...product,
      description: product.description || "Default description",
      quantity: product.quantity || 1,
    };
    // console.log(cartItem)
    dispatch(addToCartAction(cartItem));
  };
  

  return (
    <>
      <Header />
      <div style={containerMenu}>
        <div style={menuDescribe}>
          <h1 style={hMenu}>Browse our menu</h1>
          <div>
            <p style={pMenu}>
              Use our menu to place an order online, or{" "}
              <span
                style={phoneTooltip}
                onMouseEnter={toggleTooltipVisibility}
                onMouseLeave={toggleTooltipVisibility}
              >
                phone
                {isTooltipVisible && (
                  <span style={phoneTooltipHover}>123-456-7890</span>
                )}
              </span>{" "}
              our store to place a pickup order. Fast and fresh food.
            </p>
          </div>
        </div>
        <div style={menuPageFilterButtonsContainer}>
          <div style={menuPageFilterButtons}>
            {["Dessert", "Dinner", "Breakfast"].map((filter) => (
              <Button
                key={filter}
                text={filter}
                style={{
                  ...menuPageButtons,
                  backgroundColor:
                    selectedFilter === filter
                      ? "#35B8BE"
                      : menuPageButtons.backgroundColor,
                  color:
                    selectedFilter === filter ? "#FFF" : menuPageButtons.color,
                }}
                onClick={() => setSelectedFilter(filter)}
              />
            ))}
          </div>
        </div>
        <Section addToCart={addToCart} selectedFilter={selectedFilter} />
      </div>
      <Footer />
    </>
  );
};

export default MenuScreen;
