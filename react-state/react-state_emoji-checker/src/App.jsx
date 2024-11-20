import "./App.css";
import { useState } from "react"

export default function App() {
  let [code, setCode] = useState();
  
  const validCode = "🐡🐠🐋";

  function handleClick(){
    setCode(validCode) 
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCode("🐡")
            console.log("Update Code! = 🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode("🐋")
            handleClick()
            console.log("Update Code! = 🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode("🐠")
            console.log("Update Code! = 🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
