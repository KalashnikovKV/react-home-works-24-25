import React from "react";
import { badgeStyles } from "./styles";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  cartItemCount?: number;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  style,
  cartItemCount = 0,
}) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(53, 184, 190, 0.15)",
        }}
        onClick={onClick}
      >
        {icon && <span>{icon}</span>}
        {text}
      </button>

      {cartItemCount > 0 && <span style={badgeStyles}>{cartItemCount}</span>}
    </div>
  );
};

export default Button;
