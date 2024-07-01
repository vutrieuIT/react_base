import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { FormHelperText } from "@mui/material";

type Props = {
  id: string;
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  helperText?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
};

export default function TextInputField({
  id,
  label,
  name,
  value,
  disabled,
  error,
  required,
  helperText,
  placeholder,
  type = "text",
  onChange,
  onBlur,
  autoComplete = "off",
}: Props) {
  return (
    <div>
      <Label id={id} required={required} error={error} label={label}></Label>
      <Input
        id={id}
        name={name}
        value={value}
        required={required}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </div>
  );
}