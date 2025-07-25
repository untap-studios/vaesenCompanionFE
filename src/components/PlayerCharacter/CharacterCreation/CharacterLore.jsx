import { TextField } from "@mui/material";
import React from "react";

export default function CharacterLore({ formData, handleChange }) {
  return (
    <>
      <TextField
        id="motivation"
        onChange={handleChange}
        value={formData.motivation}
        required
        name="motivation"
        label="Motivation"
        variant="standard"
      />
      <TextField
        id="trauma"
        onChange={handleChange}
        value={formData.trauma}
        required
        name="trauma"
        label="Trauma"
        variant="standard"
      />
      <TextField
        id="darkSecret"
        onChange={handleChange}
        value={formData.darkSecret}
        required
        name="darkSecret"
        label="Dark Secret"
        variant="standard"
      />
    </>
  );
}
