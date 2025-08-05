import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CharacterTile from "./PlayerCharacter/CharacterTile";
import { UserTypes } from "../types/user";
import { callApi } from "../utils/callApi";

export default function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserTypes | null>(null);

  useEffect(() => {
    const getUser = async () => {

      const data = await callApi(`users/${userId}`, "GET");
      console.log(data)
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
      <Link to="/games">
        <button>View Games</button>
      </Link>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          <img
            src={userData.image || "https://picsum.photos/200/200"}
            alt={userData.name}
          />
          <div>
            <h2>Characters</h2>
            {userData.playerCharacters &&
              userData.playerCharacters.map((character) => (
                <CharacterTile character={character}/>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
