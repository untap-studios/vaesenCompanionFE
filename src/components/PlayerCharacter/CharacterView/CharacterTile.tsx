import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { CharacterSheet } from "../../../types/playerCharacter";

const CharacterTile = ({ character }: { character: CharacterSheet }) => {
  return (
    <Link to={`/character/${character._id}`}>
      <Box>
        <img src={character.image} />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {character.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {character.age}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {character.archetype}
        </Typography>
      </Box>
    </Link>
  );
};

export default CharacterTile;
