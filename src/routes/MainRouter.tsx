import { BrowserRouter } from "react-router-dom";
import AuthorizedRoutes from "./AuthorizedRoutes";
import UnauthorizedRoutes from "./UnauthorizedRoutes";
import { useAuth } from "../hooks/useAuth";
import { ThemeProvider } from "../screens/Theme/ThemeContext";

const MainRouter = ({}) => {
  const { isLoggedIn } = useAuth();
  return (
    <ThemeProvider>
      <BrowserRouter>
        {isLoggedIn ? (
          <AuthorizedRoutes isLoggedIn={isLoggedIn} />
        ) : (
          <UnauthorizedRoutes isLoggedIn={isLoggedIn} />
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default MainRouter;
