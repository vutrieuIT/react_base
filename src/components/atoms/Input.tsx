import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

type Props = {
  id: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  autoComplete?: string;
};

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
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Input({
  id,
  required,
  disabled,
  error,
  placeholder,
  type = "text",
  onChange,
  onBlur,
  name,
  value,
  autoComplete = "off",
}: Props) {
  return (
    <BorderInput
      id={id}
      name={name}
      value={value}
      required={required}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      onChange={onChange}  // Ensure this line is present
      onBlur={onBlur}      // Ensure this line is present
      autoComplete={autoComplete}
    />
  );
}
