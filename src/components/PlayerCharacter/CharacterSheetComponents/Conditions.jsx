import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function Conditions() {
  return (
    <Grid
      item
      size={6}
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <FormGroup>
        <Typography variant="h6">Physical</Typography>
        <FormControlLabel control={<Checkbox />} label="Exhausted" />
        <FormControlLabel control={<Checkbox />} label="Battered" />
        <FormControlLabel control={<Checkbox />} label="Wounded" />
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Mental</Typography>
        <FormControlLabel control={<Checkbox />} label="Angry" />
        <FormControlLabel control={<Checkbox />} label="Frightened" />
        <FormControlLabel control={<Checkbox />} label="Hopeless" />
      </FormGroup>
    </Grid>
  );
}
