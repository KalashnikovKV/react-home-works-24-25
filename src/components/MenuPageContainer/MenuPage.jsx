import { useState, useEffect } from "react";
import Header from "../HeaderContainer/Header";
import Footer from "../FooterContainer/Footer";
import Section from "../SectionContainer/Section";
import Cart from "../CartContainer/Cart";
import {
  phoneTooltip,
  containerMenu,
  phoneTooltipHover,
  menuPageButtons,
  menuPageFilterButtons,
  menuDescribe,
  hMenu,
  pMenu,
  menuPageFilterButtonsContainer,
  hHome,
  p1Home,
  buttonHome,
  imageStarHome,
  p2Home,
  hLogin,
  hLoginForm,
  divLoginInput,
  inputLoginInput,
  buttonLoginS,
  buttonLoginR,
} from "./styles";
import Button from "../ButtonComponent/Button";

const MenuPage = () => {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleRegister = () => {
    if (users.find((u) => u.username === username)) {
      alert("Username already exists.");
      return;
    }
    setUsers([...users, { username, password }]);
    alert("Registration successful! Please log in.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCartItems, { ...product }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  const toggleTooltipVisibility = () => {
    setIsTooltipVisible((prevVisibility) => !prevVisibility);
  };

  const renderContent = () => {
    if (isCartVisible) {
      return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
    }

    switch (selectedSection) {
      case "Home":
        return isLoggedIn ? (
          <div style={containerMenu}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: 1200,
                height: 580,
                marginBottom: 140,
                marginTop: 100,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start ",
                  textAlign: "left",
                }}
              >
                <div style={hHome}>
                  Beautiful food & takeaway,{" "}
                  <span style={{ color: "#35B8BE" }}>delivered</span> to your
                  door.
                </div>
                <p style={p1Home}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500.
                </p>
                <Button
                  text="Place an Order"
                  onClick={() => console.log("render")}
                  style={buttonHome}
                />
                <div style={imageStarHome}>
                  <img
                    src="./src/assets/images/homePage/starAndName.png"
                    alt="starAndName.png"
                    width={110}
                    height={27}
                  />
                </div>
                <p style={p2Home}>
                  <span style={{ color: "#35B8BE" }}>4.8 out of 5</span> based
                  on 2000+ reviews
                </p>
              </div>
              <div>
                <div>
                  <img
                    src="./src/assets/images/homePage/food.png"
                    alt="food.png"
                    width={600}
                    height={580}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Please log in to access the Menu</div>
        );
      case "Menu":
        return isLoggedIn ? (
          <div style={containerMenu}>
            <div style={menuDescribe}>
              <h1 style={hMenu}>Browse our menu</h1>
              <div>
                <p style={pMenu}>
                  Use our menu to place an order online, or{" "}
                  <span
                    style={phoneTooltip}
                    onMouseEnter={toggleTooltipVisibility}
                    onMouseLeave={toggleTooltipVisibility}
                  >
                    phone
                    {isTooltipVisible && (
                      <span style={phoneTooltipHover}>123-456-7890</span>
                    )}
                  </span>{" "}
                  our store to place a pickup order. Fast and fresh food.
                </p>
              </div>
            </div>
            <div style={menuPageFilterButtonsContainer}>
              <div style={menuPageFilterButtons}>
                {["Dessert", "Dinner", "Breakfast"].map((filter) => (
                  <Button
                    key={filter}
                    text={filter}
                    style={{
                      ...menuPageButtons,
                      backgroundColor:
                        selectedFilter === filter
                          ? "#35B8BE"
                          : menuPageButtons.backgroundColor,
                      color:
                        selectedFilter === filter
                          ? "#FFF"
                          : menuPageButtons.color,
                    }}
                    onClick={() => setSelectedFilter(filter)}
                  />
                ))}
              </div>
            </div>
            <Section addToCart={addToCart} selectedFilter={selectedFilter} />
          </div>
        ) : (
          <div>Please log in to access the Menu</div>
        );
      case "Company":
        return (
          <div style={containerMenu}>
            <div>Welcome to the Company Page!</div>
          </div>
        );
      case "Login":
        return (
          <div style={{ textAlign: "center", padding: 20 }}>
            {!isLoggedIn ? (
              <div style={containerMenu}>
                <h1 style={hLogin}>Log in</h1>
                <form
                  style={hLoginForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <div style={divLoginInput}>
                    <label>User name</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={inputLoginInput}
                      required
                    />
                  </div>
                  <div style={divLoginInput}>
                    <label>Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={inputLoginInput}
                      required
                    />
                  </div>
                  <div>
                    <Button
                      text="Submit"
                      style={buttonLoginS}
                    ></Button>
                    <Button
                      text="Register"
                      onClick={handleRegister}
                      style={buttonLoginR}
                    ></Button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={containerMenu}>
                <h2>Welcome, {username}!</h2>
                <Button
                  text="Logout"
                  onClick={handleLogout}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff6666",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                ></Button>
              </div>
            )}
          </div>
        );
      default:
        return (
          <div style={containerMenu}>
            <div>Something went wrong!</div>
          </div>
        );
    }
  };

  return (
    <>
      <Header
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        toggleCart={toggleCartVisibility}
        cartItemCount={cartItems.length}
      />
      <main style={{ backgroundColor: "#F5FBFC" }}>{renderContent()}</main>
      <Footer />
    </>
  );
};

export default MenuPage;
