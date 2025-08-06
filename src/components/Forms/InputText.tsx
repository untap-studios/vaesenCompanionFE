import React from "react";
import { Box, TextField, Typography } from "@mui/material";

interface InputTextProps {
  kind: string;
  labelText: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: InputTextProps) => {
  const { kind, labelText, required, onChange } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      sx={{ maxWidth: '100vw', paddingBottom:1 }}
    >
      <Typography>{labelText}</Typography>
      <TextField
        sx={{ input:{color:'#fff'}}}
        onChange={onChange}
        type={kind}
        id={`input-text-${kind}`}
        name={`${kind}`}
        required={required}
      />
    </Box>
  );
};

export default InputText;
