import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const fetchMoviesList = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(result);
    setUserList(result.data);
  };

  useEffect(() => {
    fetchMoviesList();
  }, [userList]);

  return (
    <div>
      <h1 className="text-danger">This is HOME Page</h1>
      <h1>Fetch results</h1>
      <hr />
      <div>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              {user.name} | {user.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
