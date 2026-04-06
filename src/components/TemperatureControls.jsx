import React from "react";

function TemperatureControls({ onIncrease, onDecrease, onReset }) {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default TemperatureControls;