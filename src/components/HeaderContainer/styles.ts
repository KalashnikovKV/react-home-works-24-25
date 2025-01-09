export const header: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFF",
  color: "white",
  justifyContent: "center",
  height: 100,
};

export const headerContainer: React.CSSProperties = {
  display: "flex",
  width: 1200,
  height: 60,
  marginTop: 20,
  marginBottom: 20,
};

export const logo: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};
export const logoIcon: React.CSSProperties = {
  width: 40,
  height: 51,
};

export const nav: React.CSSProperties = {
  display: "flex",
  width: 408,
  height: 60,
  paddingRight: 63,
  alignItems: "flex-start",
  marginLeft: 683,
  marginRight: 14,
};

export const navList: React.CSSProperties = {
  margin: 0,
  padding: 0,
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  listStyle: "none",
  width: "100%",
  height: "100%",

  color: "#28224B",
  fontFamily: "Inter",
  fontSize: 15,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: 20,
};

export const headerButtonStyle: React.CSSProperties = {
  backgroundColor: "#35B8BE",
  width: 55,
  height: 55,
  padding: 0,
  borderRadius: "6px",
};

export const buttonContainer: React.CSSProperties = {
  width: 55,
  height: 55,
};

export const cart: React.CSSProperties = {};

export const navItemStyles: React.CSSProperties = {
  cursor: "pointer",
  color: "#222",
  padding: "10px 15px",
  textDecoration: "none",
};

export const activeNavItemStyles: React.CSSProperties = {
  ...navItemStyles,
  color: "#35B8BE",
  fontWeight: "bold",
};
