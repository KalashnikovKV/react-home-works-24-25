import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CompanyScreen from "../screens/CompanyScreen";
import MenuScreen from "../screens/MenuScreen";

interface UnauthorizedRoutesProps {
  isLoggedIn: boolean;
  addToCart?: (product: any) => void;
}

const UnauthorizedRoutes: React.FC<UnauthorizedRoutesProps> = ({
  isLoggedIn,
  addToCart,
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
      <Route path="/" element={<HomeScreen />} />
      <Route path="/company" element={<CompanyScreen />} />
      <Route path="/menu" element={<MenuScreen  />} />
    </Routes>
  );
};

export default UnauthorizedRoutes;
