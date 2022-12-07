import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([
    { username: "chris", age: 28 },
    { username: "mia", age: 25 },
    { username: "nova", age: 3 },
    { username: "blanca", age: 54 },
    { username: "welo", age: 93 },
  ]);
  const addUser = (username, age) => {
    setUsers(prevArr => {
      return [
        { username, age },
        ...prevArr
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUser} />
      <UsersList users={users} />
    </>
  );
};

export default App;
