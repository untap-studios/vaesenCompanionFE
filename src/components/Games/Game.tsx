import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameTypes } from "../../types/game";
import { callApi } from "../../utils/callApi";
import AutocompleteSearch from "./AutocompleteSearch";
import GameUsers from "./GameComponents/GameUsers";
import { Button } from "@mui/material";

export default function Game() {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState<GameTypes | null>(null);
  const [displayAddUser, setDisplayAddUser] = useState(false);

  useEffect(() => {
    const getGame = async () => {
      const data = await callApi(`games/${gameId}`, "GET");

      setGameData(data.data.game);
    };
    getGame();
  }, [gameId]);

  return (
    <div>
      <h1>Game</h1>
      <h2>{gameData?.name && gameData.name}</h2>
      <GameUsers gameData={gameData}/>

    <Button variant="contained" color="primary" onClick={() => setDisplayAddUser(!displayAddUser)}>Add User</Button>
      {displayAddUser && gameId && <AutocompleteSearch setGameData={setGameData} gameId={gameId}/>}
    </div>
  );
}
