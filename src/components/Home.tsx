import { Link } from "react-router";

export default function Home() {

  return (
    <div>
      <h1>Vaesen Companion</h1>
      <div className="card">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
