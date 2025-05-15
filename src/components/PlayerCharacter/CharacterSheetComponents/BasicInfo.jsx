import { Box, Grid, TextField } from "@mui/material";
import React from "react";

export default function BasicInfo({ formData, handleChange }) {
  return (
    <>
      <Grid
        item
        size={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            background: "blue",
            marginBottom: "20px",
          }}
        />
        <input
          type="hidden"
          value={formData.image}
          onChange={(e) => handleChange(e, "image")}
        />
        <Box>
          <TextField
            id="outlined-basic"
            label="Name"
            value={formData.name}
            variant="outlined"
            onChange={(e) => handleChange(e, "name")}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Age"
            value={formData.age}
            variant="outlined"
            onChange={(e) => handleChange(e, "age")}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Archetype"
            value={formData.archetype}
            variant="outlined"
            onChange={(e) => handleChange(e, "archetype")}
          />
        </Box>
      </Grid>
    </>
  );
}
