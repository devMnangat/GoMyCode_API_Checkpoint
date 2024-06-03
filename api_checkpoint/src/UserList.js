import React, { useEffect, useState } from "react";
import './userlist.css';
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setListOfUser(res.data);
          })
        .catch((err) => setError(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ol>
        {listOfUser.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};


export default UserList;
