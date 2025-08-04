import React from 'react'
import { useNavigate } from 'react-router';

export default function CreateGame() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const gameData = {
            name,
            description,
            image
        };

        fetch("http://localhost:8080/api/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(gameData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                navigate("/games", { state: { token: localStorage.getItem("token") } });
            }
        })
    }
  return (
    <div>
        <h1>CreateGame</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
            <label htmlFor="description">Description</label>
            <input onChange={(e) => setDescription(e.target.value)} type="text" id="description" name="description" />
            <label htmlFor="image">Image</label>
            <input onChange={(e) => setImage(e.target.value)} type="text" id="image" name="image" />
            <button  type="submit">Create Game</button>
        </form>
    </div>
  )
}
