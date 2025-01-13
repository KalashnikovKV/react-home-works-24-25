import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthorizedRoutes from "./AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import { useAuth } from "../hooks/useAuth";

interface MainRouterProps {
  cartItems?: any[];
  removeFromCart?: (id: number) => void;
  addToCart?: (product: any) => void;
}

const MainRouter: React.FC<MainRouterProps> = ({
  cartItems,
  removeFromCart,
  addToCart,
}) => {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <AuthorizedRoutes isLoggedIn={isLoggedIn}/>
      ) : (
        <UnauthorizedRoutes isLoggedIn={isLoggedIn}/>
      )}
    </BrowserRouter>
  );
};

export default MainRouter;
