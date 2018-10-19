import React from "react";
import ReactDOM from "react-dom";

function rah() {
  alert("rah!");
}

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={rah}>rah</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
