import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const ItemsDisplay = ({ title, items }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: 1,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {items.map((currentItem) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "&:hover": {
              backgroundColor: "primary.dark", // Background color on hover
              cursor: "pointer", // Change cursor on hover
              transform: "scale(1.05)", // Example: slight scale up on hover
              transition:
                "background-color 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition
            },
          }}
        >
          <Typography>Name: {currentItem.name}</Typography>
          <Typography>Description: {currentItem.description}</Typography>
        </Box>
      ))}

      <Button>Add {title}</Button>
    </Container>
  );
};

const CharacterView = ({ character }) => {
  console.log({ ...character });
  const {
    name,
    image,
    age,
    archetype,
    motivation,
    trauma,
    equipment,
    darkSecret,
    relationships,
    talents,
    weapons,
    mementos,
    attributes,
    resources,
    skills,
    advantages,
    insightsAndDefects,
    armor,
    conditions,
  } = character;
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "#333",
        padding: 1,
        borderRadius: 1,
      }}
    >
      {/* Char Sheet Char Tile */}
      <Box sx={{ backgroundColor: "#000", padding: 1, borderRadius: 1 }}>
        <Typography>{name}</Typography>
        <Typography>Age: {age}</Typography>
        <Box sx={{ maxWidth: 200 }}>
          <img
            style={{
              width: "100%",
            }}
            src={image}
          />
        </Box>
        <Typography>Archetype: {archetype}</Typography>
      </Box>
      {/* Details */}
      <Container>
        <ItemsDisplay items={equipment} title={"Equipment"} />
        <ItemsDisplay items={weapons} title={"Weapons"} />
      </Container>
    </Container>
  );
};

export default CharacterView;
