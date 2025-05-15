import { Box, Grid, TextField } from "@mui/material";
import React from "react";

export default function Background({formData, handleChange}) {
  return (
    <Grid container sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <Grid item size={12}>
        <TextField
                    id="outlined-basic"
                    label="Motivation"
                    value={formData.motivation}
                    variant="outlined"
                    onChange={(e) => handleChange(e, "motivation")}
                  />
      </Grid>
      <Grid item size={12}>
        <TextField
                    id="outlined-basic"
                    label="Trauma"
                    value={formData.trauma}
                    variant="outlined"
                    onChange={(e) => handleChange(e, "trauma")}
                  />
      </Grid>
      <Grid item size={12}>
        <TextField
                    id="outlined-basic"
                    label="Dark Secret"
                    value={formData.darkSecret}
                    variant="outlined"
                    onChange={(e) => handleChange(e, "darkSecret")}
                  />
      </Grid>
    </Grid>
  );
}
