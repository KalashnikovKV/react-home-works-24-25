import React from "react";
import Footer from "../components/FooterContainer/Footer";
import Header from "../components/HeaderContainer/Header";

const containerMenu: React.CSSProperties = {
  textAlign: "center",
  minWidth: 1200,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5FBFC",
  flexDirection: "column",
};

const hCompany: React.CSSProperties = {
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
  color: "black",
};

const CompanyScreen: React.FC = () => {
  return (
    <>
      <Header />
      <div style={containerMenu}>
        <h1 style={hCompany}>Welcome to the Company Page!</h1>
      </div>
      <Footer />
    </>
  );
};

export default CompanyScreen;
