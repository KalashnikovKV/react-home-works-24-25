import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthorizedRoutes from "./AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import { useAuth } from "../hooks/useAuth";



const MainRouter = ({ }) => {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <AuthorizedRoutes isLoggedIn={isLoggedIn} />
      ) : (
        <UnauthorizedRoutes isLoggedIn={isLoggedIn} />
      )}
    </BrowserRouter>
  );
};

export default MainRouter;
