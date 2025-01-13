import React from "react";
import { Routes, Route} from "react-router-dom";
import MenuScreen from "../screens/MenuScreen";
import Order from "../components/CartContainer/Order";
import LoginScreen from "../screens/LoginScreen";
import CompanyScreen from "../screens/CompanyScreen";
import HomeScreen from "../screens/HomeScreen";

interface AuthorizedRoutesProps {
  isLoggedIn: boolean;
  removeFromCart?: (id: number) => void;
  addToCart?: (product: any) => void;
}

const AuthorizedRoutes: React.FC<AuthorizedRoutesProps> = ({
  isLoggedIn,
  removeFromCart,
}) => {

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginScreen
            isLoggedIn={isLoggedIn}
            user={null}
          />
        }
      />
      <Route path="/" element={<HomeScreen  />} />
      <Route path="/menu" element={<MenuScreen  />} />
      <Route path="/company" element={<CompanyScreen />} />
      <Route path="/cart" element={<Order  removeFromCart={removeFromCart}/>} />
    </Routes>
  );
};

export default AuthorizedRoutes;
