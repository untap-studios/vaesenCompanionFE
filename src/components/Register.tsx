import React from "react";
import { useNavigate } from "react-router";
import { ChangeEvent, SubmitEvent } from "../types/events";
import { callApi } from "../utils/callApi";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);

  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const imageData = new FormData();

    if (image) {
      imageData.append("image", image);
    }
    
    const result = await callApi("upload", "POST", imageData);

    const userData = {
      name,
      email,
      password,
      imageUrl: result.imageUrl
    }

    const response = await callApi("register", "POST", userData)

    if (response.userId) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId)
      navigate(`/users/${response.userId}`, {
        state: { token: response.token },
      });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <input
          type="file"
          name="image"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) setImage(file);
          }}
        />
        {image && <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          style={{
            width: "200px",
            height: "auto",
            display: image ? "block" : "none",
            marginTop: "10px",
          }}
        />}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
