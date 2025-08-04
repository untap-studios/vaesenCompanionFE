import React from "react";
import { useNavigate } from "react-router";
import { Box, TextField } from "@mui/material";
import InputGenric from "./formComponents/InputText";
import FormButton from "./formComponents/FormButton";

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
    <Box sx={{
      backgroundColor:'#333',
      padding:3
    }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputGenric
          kind={"email"}
          labelText={"Email"}
          onChange={handleEmailChange}
          required
        />

        <InputGenric
          kind={"password"}
          labelText={"Password"}
          onChange={handlePasswordChange}
          required
        />

        <FormButton text={'Login'}/>

      </form>
    </Box>
  );
}
