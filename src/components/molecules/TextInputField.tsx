// type

import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { FormHelperText } from "@mui/material";

type Props = {
    label: string;
    disabled?: boolean;
    id: string;
    error?: boolean;
    required?: boolean;
    helperText?: string;
};

export default function TextInputField(props: Props) {
  return <div>
    <Label id={props.id} required={props.required} error={props.error} label={props.label} ></Label>
    <Input id={props.id} required={props.required} error={props.error} disabled={props.disabled}></Input>
    <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
  </div>;
}