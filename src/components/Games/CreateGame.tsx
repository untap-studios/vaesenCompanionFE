import React from "react";
import { useLocation, useNavigate } from "react-router";
import { callApi } from "../../utils/callApi";

export default function CreateGame() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem("userId");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const imageData = new FormData();
    if (image) {
      imageData.append("image", image);
    }

    const result = await callApi("upload", "POST", imageData);

    const gameData = {
      name,
      description,
      imageUrl: result.imageUrl,
      users: [userId],
      gameMaster: userId
    };

    const response = await callApi("games", "POST", gameData);

    if (response) {
      navigate("/games");
    } else {
      console.error("Failed to create game");
    }
  };
  return (
    <div>
      <h1>CreateGame</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          onChange={(event) => {
            console.log(event.target.files?.[0]);
            const file = event.target.files?.[0];
            if (file) setImage(file);
          }}
        />
        {image && <img src={URL.createObjectURL(image as any)} alt="Preview" style={{ width: '200px', height: 'auto', display: image ? 'block' : 'none', marginTop: '10px' }} />}
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
}
