import React from "react";

function TemperatureDisplay({ temperature }) {
  let message = "";
  let color = "";

  if (temperature < 15) {
    message = "¡Hace frío!";
    color = "blue";
  } else if (temperature <= 25) {
    message = "Temperatura agradable";
    color = "green";
  } else {
    message = "¡Hace calor!";
    color = "red";
  }

  return (
    <div>
      <h2 style={{ color }}>{temperature} °C</h2>
      <p>{message}</p>
    </div>
  );
}

export default TemperatureDisplay;