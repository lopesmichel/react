import React, { useState } from "react";

const ManageData = () => {
  const [someData, setSomeData] = useState(10);
  const [number, setNumber] = useState(15);

  console.log(someData);
  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => setSomeData(15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar state</button>
      </div>
    </div>
  );
};

export default ManageData;
