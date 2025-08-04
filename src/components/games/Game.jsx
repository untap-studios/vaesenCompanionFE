import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function Game() {
    const {gameId} = useParams();
    const [gameData, setGameData] = useState(null);
    const [name, setName] = useState('');
    const [userToAdd, setUserToAdd] = useState(null);

    useEffect(() => {
        
        const fetchGame = async () => {
            const response = await fetch(`http://localhost:8080/api/games/${gameId}`);
            const data = await response.json();
            
            setGameData(data.data.game);
        }
        fetchGame();
    }
    , [gameId]);

    const findUser = async (e) => {
        e.preventDefault();
        const user = await fetch(`http://localhost:8080/api/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await user.json();
        
        
        setUserToAdd(data.data.users.find((user) => user.name === name));
        
    }

    const addUserToGame = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/games/${gameId}/add-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(userToAdd),
        });
        const data = await response.json();
        console.log(data);
        
    }

  return (
    <div>
        <h1>Game</h1>
        <h2>{gameData?.name && gameData.name}</h2>
        
        <form onSubmit={findUser}>
            <label htmlFor='name'>Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
            <button type="submit">find user</button>
        </form>

        {userToAdd && (
            <div>
                <div onClick={addUserToGame}>XXXX</div>
                <h2>{userToAdd.name}</h2>
                <p>{userToAdd.email}</p>
                <img src={userToAdd.image || "https://picsum.photos/200/200"} alt={userToAdd.name} />
            </div>
        )}

        {gameData?.users && gameData.users.map((user) => (
            <div key={user?._id}>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
                <img src={user?.image || "https://picsum.photos/200/200"} alt={user?.name} />
            </div>
        ))}
    </div>
  )
}
