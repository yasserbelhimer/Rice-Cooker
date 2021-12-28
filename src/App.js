import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [restTime, setRestTime] = useState(30);
  const [mode, setMode] = useState(1);
  const handleOpen = () => {
    if (!isOn) setIsOpen(!isOpen);
  };
  const handleOn = () => {
    if (!isOpen && !isStarted) setIsOn(!isOn);
    setMode(1);
  };
  const handleMode = () => {
    if (!isStarted) setMode((mode % 3) + 1);
  };
  const handleIsStarted = () => {
    if (isOn) setIsStarted(!isStarted);
    if (!isStarted) {
      setInterval(setRestTime, 1000,restTime-1);
    }
  };
  function decriment() {
    setRestTime(restTime - 1);
  }
  return (
    <div className="wrapper">
      <div className="cooker">
        <div className={`lid ${isOpen && "hidden"}`}></div>
        <div className={`screen ${isOn && "power-on"} px-3`}>
          <div className="row">
            <div className="col">
              <h1>{isOn ? "ON" : "OFF"}</h1>
            </div>
            <div className="col text-right">
              <h1>{temperature}°C</h1>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h4 className={`${isOn && mode === 1 && "text-primary"}`}>
                Rapide
              </h4>
              <h4 className={`${isOn && mode === 2 && "text-primary"}`}>
                Normal
              </h4>
              <h4 className={`${isOn && mode === 3 && "text-primary"}`}>
                Lent
              </h4>
            </div>
            <div className="col text-right">
              <h1>{restTime} M</h1>
            </div>
          </div>
        </div>

        <div className="butspace">
          <button className="onn" onClick={handleOpen} disabled={isOn}>
            {isOpen ? "CLOSE" : "OPEN"}
          </button>
          <button className="onn" onClick={handleOn} disabled={isOpen}>
            <span>
              <i className="fas fa-power-off fa-lg"></i>
            </span>
          </button>

          <button className="onn" onClick={handleMode}>
            MODE
          </button>
          <button className="onn" onClick={handleIsStarted}>
            {isStarted ? "STOP" : "START"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
