import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return { isLoggedIn };
};
