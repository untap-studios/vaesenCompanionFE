import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { CharacterSheet } from "../../../types/playerCharacter";

const CharacterTile = ({ character }: { character: CharacterSheet }) => {
  const imageUrl = character.image.startsWith("http") ? character.image : "https://picsum.photos/200/200";

  return (
    <Link to={`/character/${character._id}`}>
      <Box sx={{margin: "10px", textAlign: "center", color: "#fff"}}>
        <img style={{width: '200px', maxHeight: '200px', objectFit: 'cover'}} src={imageUrl} />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {character.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          {character.archetype}
        </Typography>
      </Box>
    </Link>
  );
};

export default CharacterTile;
