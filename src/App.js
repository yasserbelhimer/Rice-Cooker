import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [on, setOn] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleOn = () => setOn(!on);
  return (
    <div className="wrapper">
      <div className="cooker">
        <div className={`lid ${isOpen && "hidden"}`}></div>
        <h1 style={{ marginTop: 40 }}>{on ? "ON" : "OFF"}</h1>

        <div className="butspace">
          <button className="onn" onClick={handleOn}>
            <ion-icon id="tr" name="power-outline"></ion-icon>
          </button>
          <button className="onn">Timer</button>
          <button className="onn" onClick={handleOpen}>
            {isOpen ? "CLOSE" : "OPEN"}
          </button>
          <button className="onn">0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
