import React from "react";
import { Button as MUIButton } from "@mui/material";

// type
type Props = {
  name: string;
  color?: "primary" | "info" | "warning" | "error";
  size?: "small" | "medium" | "large";
  onClick: () => void;
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
}: Props) {
  return (
    <MUIButton
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      variant="contained"
      color={color}
      size={size}
    >
      {name}
    </MUIButton>
  );
}
