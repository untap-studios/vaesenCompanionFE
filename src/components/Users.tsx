import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { UserTypes } from "../types/user";
import { callApi } from "../utils/callApi";

export default function Users() {
  const [users, setUsers] = useState<UserTypes[]>([]);
  const location = useLocation(); // Access the location object
  const token = location.state?.token;

  const getUsers = async () => {
    const data = await callApi("users", "GET");

    setUsers(data.data.users);
  };

  useEffect(() => {
    getUsers();
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
