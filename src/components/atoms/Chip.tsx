import { Chip as MUIChip } from "@mui/material";

type Props = {
    label: string;
    color?: "primary" | "info" | "warning" | "error" | "default" | "secondary" | "success";
    onDelete?: () => void;
    
};

export default function Chip({ label, color, onDelete }: Props) {
    return (
        <MUIChip
            label={label}
            color={color}
            onDelete={onDelete}
        />
    );
}