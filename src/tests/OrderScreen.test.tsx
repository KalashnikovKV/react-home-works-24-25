import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import OrderScreen from "../screens/Order/OrderScreen";
import { removeFromCart } from "../redux/reducers/cartReducer";

const mockStore = configureStore([]);

describe("OrderScreenComponent", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [
          { id: 1, name: "Product 1", price: 100 },
          { id: 2, name: "Product 2", price: 150 },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders header and footer", () => {
    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    expect(screen.getByText(/Finish your order/i)).toBeInTheDocument();
    expect(screen.getByText(/Your cart is empty/i)).not.toBeInTheDocument();
  });

  test("renders cart items", () => {
    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("removes an item from the cart", () => {
    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    const removeButtons = screen.getAllByText(/Remove/i);
    fireEvent.click(removeButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(1));
  });

  test("shows 'Your cart is empty' if no items in cart", () => {
    store = mockStore({
      cart: {
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  test("updates street and house fields", () => {
    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    const streetInput = screen.getByLabelText("Street");
    const houseInput = screen.getByLabelText("House");

    fireEvent.change(streetInput, { target: { value: "123 Main St" } });
    fireEvent.change(houseInput, { target: { value: "12A" } });

    expect(streetInput).toHaveValue("123 Main St");
    expect(houseInput).toHaveValue("12A");
  });

  test("triggers OrderScreenalert on click", () => {
    window.alert = jest.fn();

    render(
      <Provider store={store}>
        <OrderScreen />
      </Provider>
    );

    const streetInput = screen.getByLabelText("Street");
    const houseInput = screen.getByLabelText("House");
    const orderButton = screen.getByText("Order");

    fireEvent.change(streetInput, { target: { value: "123 Main St" } });
    fireEvent.change(houseInput, { target: { value: "12A" } });
    fireEvent.click(orderButton);

    expect(window.alert).toHaveBeenCalledWith(
      "OrderScreenplaced! Address: 123 Main St, 12A"
    );
  });
});
