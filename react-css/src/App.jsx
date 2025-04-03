import React from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 15

  return (
    <div className="App"> 
      <h1>css</h1>
      <MyComponent />
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>inline</p>
    
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>teste</h2>
    </div>
  )
}

export default App;
