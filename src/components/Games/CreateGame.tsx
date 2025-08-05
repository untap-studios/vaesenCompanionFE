import React from 'react'
import { useNavigate } from 'react-router';
import { SubmitEvent } from '../../types/events';
import { callApi } from '../../utils/callApi';

export default function CreateGame() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        const gameData = {
            name,
            description,
            image
        };

        const result = await callApi("games", "POST", gameData);
        
        if (result) {
            navigate("/games");
        } else {
            console.error("Failed to create game");
        }
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
