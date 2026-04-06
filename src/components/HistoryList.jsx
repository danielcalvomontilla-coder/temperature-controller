import React from "react";

function HistoryList({ history }) {
  return (
    <div>
      <h3>Historial</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;