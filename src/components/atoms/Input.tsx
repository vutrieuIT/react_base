import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

//type
type Props = {
  id: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
};
export default function Input({
  id,
  required,
  disabled,
  error,
  placeholder,
}: Props) {
  const BorderInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <BorderInput
      id={id}
      error={error}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}
