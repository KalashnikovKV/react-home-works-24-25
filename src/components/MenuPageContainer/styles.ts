export const containerMenu: React.CSSProperties = {
  textAlign: "center",
  minWidth: 1200,
  // minHeight: 1056,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5FBFC",
  color: "black",
  flexDirection: "column",
  // marginTop: 140,
};

export const phoneTooltip: React.CSSProperties = {
  position: "relative",
  cursor: "pointer",
  textDecoration: "none",

  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0.36,
};

export const phoneTooltipHover: React.CSSProperties = {
  content: '"123-456-7890"',
  position: "absolute",
  bottom: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#333",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "4px",
  whiteSpace: "nowrap",
  marginBottom: "5px",
  zIndex: 1,
};
export const menuPageFilterButtonsContainer: React.CSSProperties = {
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 1200,
  height: 52,
};

export const menuPageFilterButtons: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 456,
  height: 52,
};

export const menuPageButtons: React.CSSProperties = {
  width: 132,
  height: 52,
  borderRadius: 6,
  border: "1px solid rgba(97, 114, 131, 0.20)",
  color: "#222",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  backgroundColor: "#FFF",
};

export const menuDescribe: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: 670,
  height: 159,
  marginTop: 140,
};

export const hMenu: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  width: 442,
  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 50,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 1.65,
};

export const pMenu: React.CSSProperties = {
  width: 466,

  color: "#546285",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0.36,
};

export const hHome: React.CSSProperties = {
  color: "#08090A",
  fontFamily: "Inter",
  fontSize: "60px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "60px",
  letterSpacing: "1.8px",
};

export const p1Home: React.CSSProperties = {
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

export const buttonHome: React.CSSProperties = {
  width: "193px",
  height: "60px",
  flexShrink: "0",
  backgroundColor: "#35B8BE",
  borderRadius: 6,
  border: "1px solid rgba(97, 114, 131, 0.20)",
  color: "#FFF",
  textAlign: "center"as const,
  fontFamily: "Inter",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
  marginTop: 53,
};

export const imageStarHome: React.CSSProperties = {
  marginTop: 30,
};

export const p2Home: React.CSSProperties = {
  marginTop: 10,
};

export const hLogin: React.CSSProperties = {
  marginTop: 155,
  color: "#35B8BE",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 50,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 1.65,
};

export const hLoginForm: React.CSSProperties = {
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

export const divLoginInput: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  width: 560,
  height: 45,
  marginBottom: 25,
  backgroundColor: "#FFF",
};

export const inputLoginInput : React.CSSProperties= {
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

export const buttonLoginS: React.CSSProperties = {
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

export const buttonLoginR: React.CSSProperties = {
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
