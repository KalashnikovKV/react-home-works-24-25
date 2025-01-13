import { Dispatch } from "redux";
import { CartItem, Product } from "./types";
import { login, logout, register } from "../redux/reducers/authReducer";

export const addToCart = (
  product: Product,
  cartItems: CartItem[],
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
): void => {
  const cartItem: CartItem = {
    ...product,
    description: product.description || "Default description",
    quantity: product.quantity || 1,
  };

  const existingItem = cartItems.find((item) => item.id === cartItem.id);
  if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item
      )
    );
  } else {
    setCartItems([...cartItems, cartItem]);
  }
};

// Удалить продукт из корзины
export const removeFromCart = (
  id: number,
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
): void => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

// Обновить количество продукта в корзине
export const updateCartItemQuantity = (
  id: number,
  quantity: number,
  cartItems: CartItem[],
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
): void => {
  if (quantity <= 0) {
    removeFromCart(id, setCartItems);
    return;
  }
  setCartItems(
    cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    )
  );
};