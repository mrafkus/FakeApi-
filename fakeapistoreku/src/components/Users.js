import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/users",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="users-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}

      {data.map((user)=> ( 
          <div key={user.id} className="card">
           <div className="card-description">
               <h6>{user.username}</h6>
               <h6>{`Email: ${user.email}`}</h6>
               <h6>{`Password: ${user.password}`}</h6>
           </div>
          </div>
      ))}
    </div>
  );
};

export default Users;
