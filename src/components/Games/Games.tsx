import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { GameTypes } from "../../types/game";
import { callApi } from "../../utils/callApi";
import { Box } from "@mui/material";

export default function Games() {
  const [games, setGames] = useState<GameTypes[]>([]);
  const location = useLocation();
  const token = location.state?.token;
  const userId = location.state?.userId || localStorage.getItem("userId");
  
  useEffect(() => {
    const getGames = async () => {
      const data = await callApi("games", "GET");

      setGames(data.data.games);
    };
    getGames();
  }, [token]);
  
  return (
    <div>
      <h1>Games</h1>
      <Link to="/create-game" state={{userId}}>
        <button>Create Game</button>
      </Link>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
        {games &&
          games.map((game) => (
            <Link to={`/games/${game._id}`} key={game._id}>
              <div>
                <h2>{game.name}</h2>
                <img
                style={{ width: '200px', height: 'auto' }}
                  src={game.imageUrl || "https://picsum.photos/200/200"}
                  alt={game.name}
                />
              </div>
            </Link>
          ))}
      </Box>
    </div>
  );
}
