import React, { useEffect, useState } from 'react';
import './App.css';

function UserData() {
  const [data, setData] = useState({});

  const getUserData = async () => {
    // using Math.floor to get the integer number
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const url = `https://jsonplaceholder.typicode.com/users/${randomNumber}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []); //using [] for run the effect on the initial render only

  const resetData = async () => {
    await getUserData();
  };

  return (
    <div className='App'>
      <button onClick={() => resetData()}>Reset</button>
      <h1>User Data</h1>
      <p>Name: {data.name}</p>
      <p>Website: {data.website}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
}

export default UserData;
