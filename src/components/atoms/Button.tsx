import React from "react";
import { Button as MUIButton } from "@mui/material";

// type
type Props = {
  name: string;
  onClick?: () => void;

  color?: "primary" | "info" | "warning" | "error";
  size?: "small" | "medium" | "large";
  type?: "submit" | "button" | "reset" | undefined;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export default function Button({
  color,
  size,
  name,
  onClick,
  startIcon,
  endIcon,
  type = "button",
}: Props) {
  return (
    <MUIButton
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      variant="contained"
      color={color}
      size={size}
      type={type}
    >
      {name}
    </MUIButton>
  );
}
