import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import MenuItemType from "@/shared/types/common";

//type
type Props = {
  label: string;
  options: MenuItemType[];
  size?: "small" | "medium" | "large";
  color?: "primary" | "info" | "warning" | "error";
  defaultValue?: string;
};

export default function CSSelect({ label, defaultValue, options }: Props) {
  const [value, setValue] = useState<string|""|undefined>(defaultValue ?? "");

  const handleSelectChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      {/* <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel> */}
      <Select labelId="demo-simple-select-autowidth-label" label={label} value={value} autoWidth onChange={handleSelectChange}>
        <MenuItem value=""></MenuItem>
        {options.map((option: MenuItemType) => {
          return <MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
