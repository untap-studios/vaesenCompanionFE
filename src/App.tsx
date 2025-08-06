import "./styles/App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import User from "./components/User";
import Games from "./components/Games/Games";
import CreateGame from "./components/Games/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./components/Games/Game";
import CreateCharacter from "./components/PlayerCharacter/CharacterCreation/CreateCharacter";
import Character from "./components/PlayerCharacter/CharacterView/Character";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/create-player" element={<CreateCharacter />} />
        <Route path="/character/:charId" element={<Character />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
