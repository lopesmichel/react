import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 28 },
    { id: 3, name: "Josias", age: 44 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * users.length) + 1; // Garante um ID válido

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== randomNumber); // Agora a comparação está correta
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
