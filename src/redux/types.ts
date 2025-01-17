import { CartItem } from "../utils/types";

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  users: User[];
}

export interface CartState {
  items: CartItem[];
}

export interface UserState {
  id: string;
  name: string;
  email: string;
}
