export const productCardStyles: React.CSSProperties = {
  display: "flex",
  overflow: "hidden",
  width: 580,
  height: 200,
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 6,
  border: "1px solid rgba(53, 184, 190, 0.15)",
  background: "#FFF",
};

export const namePriceContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: 378,
  height: 40,
};

export const productName: React.CSSProperties = {
  margin: 0,
  color: "#08090A",
  fontFamily: "Inter",
  fontSize: 18,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "0.6px",
};

export const productPrice: React.CSSProperties = {
  margin: 0,
  padding: 0,
  color: "#35B8BE",
};

export const productDescribtion: React.CSSProperties = {
  display: "flex",
  margin: 0,
  padding: 0,
  minWidth: 351,
  color: "#546285",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  marginTop: 6,
  marginBottom: 8,
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const productImageStyles: React.CSSProperties = {
  justifyContent: "center",
  width: 120,
  marginLeft: 26,
};

export const productInfoStyles: React.CSSProperties = {
  width: 378,
  height: 147,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: 26,
};

export const quantityInputStyles: React.CSSProperties = {
  width: 60,
  height: 45,
  borderRadius: 6,
  border: "1px solid #DDD",
  background: "#FAFAFA",
  textAlign: "center",

  color: "#000",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "0.36px",
};

export const addButtonStyles: React.CSSProperties = {
  marginLeft: 8,
  width: 147,
  height: 45,
  borderRadius: 6,
  background: "#35B8BE",

  color: "#FFF",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "0.36px",
};

export const removeButtonStyles: React.CSSProperties = {
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};