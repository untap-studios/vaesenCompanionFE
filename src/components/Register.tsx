import React from "react";
import { useNavigate } from "react-router";
import { ChangeEvent, SubmitEvent } from "../types/events";
import { callApi } from "../utils/callApi";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const data = {
      name,
      image,
      email,
      password,
    };

    const result = await callApi("register", "POST", data);
    console.log('yo', result);
    if (result.userId) {
      localStorage.setItem("token", result.token);
      navigate(`/users/${result.userId}`, {
        state: { token: result.token },
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
          <label htmlFor="image">Image URL</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            id="image"
            name="image"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
