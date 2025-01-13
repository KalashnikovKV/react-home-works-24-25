import React from "react";
import Button from "../components/ButtonComponent/Button";
import Footer from "../components/FooterContainer/Footer";
import Header from "../components/HeaderContainer/Header";

const containerMenu = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
};

const hHome = {
  color: "#08090A",
  fontFamily: "Inter",
  fontSize: "60px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "60px",
  letterSpacing: "1.8px",
};

const p1Home = {
  color: "#546285",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24.12px",
  letterSpacing: "0.36px",
  marginTop: 27,
  width: 539,
  height: 73,
};

const buttonHome = {
  width: "193px",
  height: "60px",
  flexShrink: "0",
  backgroundColor: "#35B8BE",
  borderRadius: 6,
  border: "1px solid rgba(97, 114, 131, 0.20)",
  color: "#FFF",
  textAlign: "center" as const,
  fontFamily: "Inter",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
  marginTop: 53,
};

const imageStarHome = {
  marginTop: 30,
};

const p2Home = {
  marginTop: 10,
};

const HomeScreen: React.FC = () => {
  return (
    <>
      <Header />
      <div style={containerMenu}>
        <div
          style={{
            display: "flex",
            flexDirection: "row" as const,
            width: 1200,
            height: 580,
            marginBottom: 140,
            marginTop: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "flex-start",
              textAlign: "left" as const,
            }}
          >
            <div style={hHome}>
              Beautiful food & takeaway,{" "}
              <span style={{ color: "#35B8BE" }}>delivered</span> to your door.
            </div>
            <p style={p1Home}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <Button
              text="Place an Order"
              onClick={() => console.log("Order placed")}
              style={buttonHome}
            />
            <div style={imageStarHome}>
              <img
                src="./src/assets/images/homePage/starAndName.png"
                alt="starAndName"
                width={110}
                height={27}
              />
            </div>
            <p style={p2Home}>
              <span style={{ color: "#35B8BE" }}>4.8 out of 5</span> based on
              2000+ reviews
            </p>
          </div>
          <div>
            <img
              src="./src/assets/images/homePage/food.png"
              alt="food"
              width={600}
              height={580}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeScreen;
