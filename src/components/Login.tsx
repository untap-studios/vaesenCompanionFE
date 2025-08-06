import React from "react";
import { useNavigate } from "react-router";
import { Box, TextField } from "@mui/material";
import InputGenric from "./Forms/InputText";
import FormButton from "./Forms/FormButton";
import { ChangeEvent, SubmitEvent } from "../types/events";
import { callApi } from "../utils/callApi";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent): void => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const result = await callApi("login", "POST", data);

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
