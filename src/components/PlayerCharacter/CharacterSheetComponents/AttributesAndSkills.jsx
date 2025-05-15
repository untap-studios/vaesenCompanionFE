import { Box, Grid } from "@mui/material";
import React from "react";

export default function AttributesAndSkills() {
  return (
    <>
      <Grid item size={3}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Physique</p>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Agility</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Close Combat</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Force</p>
            <p>0</p>
          </Box>
        </Box>
      </Grid>
      <Grid item size={3}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Precision</p>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Medicine</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Ranged Combat</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Stealth</p>
            <p>0</p>
          </Box>
        </Box>
      </Grid>
      <Grid item size={3}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Empathy</p>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Inspiration</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Manipulation</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Observation</p>
            <p>0</p>
          </Box>
        </Box>
      </Grid>
      <Grid item size={3}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Logic</p>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Investigation</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Learning</p>
            <p>0</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <p>Vigilance</p>
            <p>0</p>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
