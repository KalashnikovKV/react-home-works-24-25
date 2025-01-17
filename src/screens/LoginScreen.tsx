import React, { useState } from "react";
import Button from "../components/ButtonComponent/Button";
import Footer from "../components/FooterContainer/Footer";
import Header from "../components/HeaderContainer/Header";
import { login, logout, register } from "../redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUsers } from "../redux/selectors/authSelectors";

const containerMenu: React.CSSProperties = {
  textAlign: "center",
  minWidth: 1200,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5FBFC",
  color: "black",
  flexDirection: "column",
};

const hLogin: React.CSSProperties = {
  marginTop: 155,
  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 50,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 1.65,
};

const hLoginForm: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: 53,
  marginBottom: 254,
  width: 695,
  height: 283,
  borderRadius: "6px",
  border: "1px solid rgba(53, 184, 190, 0.15)",
  backgroundColor: "#FFF",
};

const divLoginInput: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  width: 560,
  height: 45,
  marginBottom: 25,
  backgroundColor: "#FFF",
};

const inputLoginInput: React.CSSProperties = {
  width: 430,
  height: 45,
  borderRadius: "6px",
  border: "1px solid #DDD",
  backgroundColor: "#FFF",
  color: "#000",
  textAlign: "left",
  paddingLeft: 15,
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "27px",
};

const buttonLoginS: React.CSSProperties = {
  marginTop: 19,
  margin: "0px 30px 0px 0px",
  width: 147,
  height: 52,
  backgroundColor: "#35B8BE",
  color: "#fff",
  border: "1px solid rgba(53, 184, 190, 0.15)",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
};

const buttonLoginR: React.CSSProperties = {
  marginTop: 19,
  margin: "0px 30px 0px 0px",
  width: 147,
  height: 52,
  backgroundColor: "#FAFAFA",
  color: "rgba(34, 34, 34, 1)",
  border: "1px solid rgba(97, 114, 131, 0.20)",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
};

interface LoginScreenProps {
  isLoggedIn: boolean;
  user: { username: string } | null;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  isLoggedIn,
  user,
}) => {
  const users = useAppSelector(selectUsers);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    try {
      dispatch(login({ username, password }));
      alert("Login successful!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  const handleRegister = () => {
    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
      alert("Username already exists.");
      return;
    }

    try {
      dispatch(register({ username, password }));
      alert("Registration successful! Please log in.");
      setUsername("");
      setPassword("");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Header />
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
                <Button text="Submit" style={buttonLoginS} />
                <Button
                  text="Register"
                  onClick={handleRegister}
                  style={buttonLoginR}
                />
              </div>
            </form>
          </div>
        ) : (
          <div style={containerMenu}>
            <h2>Welcome, {user?.username}!</h2>
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
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginScreen;
