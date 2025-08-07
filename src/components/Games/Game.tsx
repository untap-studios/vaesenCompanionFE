import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameTypes } from "../../types/game";
import { UserTypes } from "../../types/user";
import { MouseEvent, SubmitEvent } from "../../types/events";
import { callApi } from "../../utils/callApi";
import AutocompleteSearch from "./AutocompleteSearch";

export default function Game() {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState<GameTypes | null>(null);
  const [name, setName] = useState("");
  const [userToAdd, setUserToAdd] = useState<UserTypes | null>(null);

  useEffect(() => {
    const getGame = async () => {
      const data = await callApi(`games/${gameId}`, "GET");

      setGameData(data.data.game);
    };
    getGame();
  }, [gameId]);

  const findUser = async (e: SubmitEvent) => {
    e.preventDefault();

    const data = await callApi("users", "GET");

    setUserToAdd(data.data.users.find((user: UserTypes) => user.name === name));
  };

  const addUserToGame = async (e: MouseEvent) => {
    e.preventDefault();
    const data = await callApi(`games/${gameId}/add-user`, "POST", userToAdd);
  };

  return (
    <div>
      <h1>Game</h1>
      <h2>{gameData?.name && gameData.name}</h2>

      <form onSubmit={findUser}>
        <label htmlFor="name">Name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
        <button type="submit">find user</button>
      </form>

      {gameId && <AutocompleteSearch gameId={gameId}/>}

      {userToAdd && (
        <div>
          <div onClick={addUserToGame}>XXXX</div>
          <h2>{userToAdd.name}</h2>
          <p>{userToAdd.email}</p>
          <img
            src={userToAdd.imageUrl || "https://picsum.photos/200/200"}
            alt={userToAdd.name}
          />
        </div>
      )}

      {gameData?.users &&
        gameData.users.map((user) => (
          <div key={user?._id}>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <img
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
              src={user?.imageUrl || "https://picsum.photos/200/200"}
              alt={user?.name}
            />
          </div>
        ))}
    </div>
  );
}
