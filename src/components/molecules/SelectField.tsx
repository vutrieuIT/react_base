import Label from "../atoms/Label";
import Select from "../atoms/Select";
import MenuItemType from "@/shared/types/common";

// type
type Props = {
  id: string;
  label: string;
  required?: boolean;
  error?: boolean;
  options: MenuItemType[];
  size?: "small" | "medium" | "large";
  color?: "primary" | "info" | "warning" | "error";
  defaultValue?: string;
};

export default function SelectField(props: Props) {
  return (
    <div>
      <Label
        id={props.id}
        required={props.required}
        error={props.error}
        label={props.label}
      />
      <Select
        label={props.label}
        defaultValue={props.defaultValue}
        options={props.options}
        size={props.size}
        color={props.color}
      />
    </div>
  );
}
