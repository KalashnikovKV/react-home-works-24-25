import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors"; // Убедитесь, что у вас есть селектор для состояния авторизации.

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return { isLoggedIn };
};
