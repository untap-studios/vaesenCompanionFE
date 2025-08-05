import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { GameTypes } from "../../types/game";
import { callApi } from "../../utils/callApi";

export default function Games() {
  const [games, setGames] = useState<GameTypes[]>([]);
  const location = useLocation();
  const token = location.state?.token;

  
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
      <Link to="/create-game">
        <button>Create Game</button>
      </Link>
      <div>
        {games &&
          games.map((game) => (
            <Link to={`/games/${game._id}`} key={game._id}>
              <div>
                <h2>{game.name}</h2>
                <img
                  src={game.image || "https://picsum.photos/200/200"}
                  alt={game.name}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
