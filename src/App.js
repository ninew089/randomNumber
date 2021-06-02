import "./App.css";
import React, { useState } from "react";
import NumberFill from "./component/numberFill";
function App() {
  const [number, setNumber] = useState([0, 0, 0]);
  const randomNumber = () => {
    return Math.ceil(Math.random() * 9);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>สุ่มเลข 3 ตัว</p>
        <div style={{ display: "inline-flex" }}>
          {number.map((item, index) => (
            <NumberFill number={item} key={index} />
          ))}
          {/*
          <NumberFill number={number[0]} />
          <NumberFill number={number[1]} />
          <NumberFill number={number[2]} />
          */}
        </div>
        <button
          style={{ marginTop: 10, fontSize: 18 }}
          onClick={() => {
            setNumber([randomNumber(), randomNumber(), randomNumber()]);
          }}
        >
          random
        </button>
      </header>
    </div>
  );
}

export default App;
