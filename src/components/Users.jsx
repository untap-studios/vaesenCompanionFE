import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const location = useLocation(); // Access the location object
  const token = location.state?.token;

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "GET", // Specify the HTTP method (optional, defaults to GET)
      headers: {
        "Content-Type": "application/json", // Specify the content type
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users &&
          users.map((user) => (
            <Link to={`/users/${user._id}`} key={user._id}>
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <img
                  src={user.image || "https://picsum.photos/200/200"}
                  alt={user.name}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
