import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.token && result.userId) {
      localStorage.setItem("token", result.token);
      navigate(`/users/${result.userId}`, {
        state: { token: result.token },
      });
    } else {
      localStorage.setItem("token", result.token);
      navigate("/games", { state: { token: result.token } });

    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
