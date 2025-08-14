import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CharacterTile from "./PlayerCharacter/CharacterView/CharacterTile";
import { UserTypes } from "../types/user";
import { callApi } from "../utils/callApi";
import { Box, Button } from "@mui/material";
import GameTile from "./Games/GameTile";

export default function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserTypes | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await callApi(`users/${userId}`, "GET");
      setUserData(data.data.user);
    };

    getUser();
  }, [userId]);

  return (
    <div>
      <h1>User</h1>
      <Link to="/create-player" state={{ userId }}>
        <button>Create Player</button>
      </Link>
      <Link to="/games" state={{ userId }}>
        <button>View Games</button>
      </Link>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          <img
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            src={userData.imageUrl || "https://picsum.photos/200/200"}
            alt={userData.name}
          />
          <div>
            <h2>Characters</h2>
            {!userData.playerCharacters?.length && (
              <div>
                <div>No characters found</div>
                <Link to="/create-player">
                  <Button>Create Character</Button>
                </Link>
              </div>
            )}
            {userData.playerCharacters && (
              <Box
                sx={{
                  width: "80vw",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "row-reverse",
                  overflowY: "scroll",
                }}
              >
                {userData.playerCharacters &&
                  userData.playerCharacters.map((character) => (
                    <CharacterTile key={character._id} character={character} />
                  ))}
                <Link to="/create-player">
                  <Button variant="contained">Create Character</Button>
                </Link>
              </Box>
            )}
          </div>
          <div>
            <h2>Games</h2>
            {!userData.games.length && (
              <div>
                <div>No games found</div>
                <Link to="/create-game" state={{ userId }}>
                  <Button variant="contained">Create Game</Button>
                </Link>
                <Button variant="contained">Join Game</Button>
              </div>
            )}
            {userData.games && (
              <Box
                sx={{
                  width: "80vw",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "row-reverse",
                  overflowY: "scroll",
                }}
              >
                {userData.games.map((game) => (
                  <GameTile key={game._id} game={game} />
                ))}
              </Box>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
