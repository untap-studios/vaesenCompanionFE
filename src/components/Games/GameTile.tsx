import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import { GameTypes } from "../../types/game";

const GameTile = ({ game }: { game: GameTypes }) => {
  const imageUrl = game.imageUrl?.startsWith("http") ? game.imageUrl : "https://picsum.photos/200/200";

  return (
    <Link to={`/games/${game._id}`}>
      <Box sx={{margin: "10px", textAlign: "center", color: "#fff"}}>
        <img style={{width: '200px', maxHeight: '200px', objectFit: 'cover'}} src={imageUrl} />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {game.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default GameTile;
