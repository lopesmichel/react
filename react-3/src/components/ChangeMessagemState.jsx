import React from 'react'

const ChangeMessagemState = ({ handleMessage}) => {
    const messages = ["teste", "teste1", "teste2", "teste3"]

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
}

export default ChangeMessagemState