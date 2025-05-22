import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import User from "./components/User";
import CreatePlayerCharacter from "./components/PlayerCharacter/CreatePlayerCharacter";
import Games from "./components/games/Games";
import CreateGame from "./components/games/CreateGame";
import Login from "./components/Login";
import Game from "./components/games/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/create-player" element={<CreatePlayerCharacter />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
