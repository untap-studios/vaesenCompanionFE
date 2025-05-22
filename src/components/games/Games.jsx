import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Games() {
  const [games, setGames] = useState([]);
  const location = useLocation(); // Access the location object
  const token = location.state?.token;

  
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:8080/api/games", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      const data = await response.json();
      console.log(data);
      setGames(data.data.games);
    };
    fetchGames();
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
                <p>{game.email}</p>
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
