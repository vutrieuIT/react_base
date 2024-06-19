import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";

type Props = {
    id: string;
    label: string;
    required?: boolean;
    error?: boolean;
}

export default function Label({required, id, label}: Props) {

    const CSInputLabel = styled(InputLabel)(() => ({
        '.MuiInputLabel-root': {
            'text-align': 'left',
        }
    }));
    return (
        <CSInputLabel error required={required} shrink htmlFor={id}>
        {label}
      </CSInputLabel>
    )
}