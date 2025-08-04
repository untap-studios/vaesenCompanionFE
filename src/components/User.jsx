import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CharacterTile from "./PlayerCharacter/CharacterTile";

export default function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`);
      const data = await response.json();

      setUserData(data.data.user);
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <h1>User</h1>
      <Link to="/create-player" state={{ userId }}>
        <button>Create Player</button>
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
