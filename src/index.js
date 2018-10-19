import React from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/assembly_required");

wasm.then(wasm => {
    const App = () => {
        return (
           <div>
             <h1>Hello world!</h1>
             <button onClick={wasm.rah}>rah</button>
           </div>
        );
    };
    ReactDOM.render(<App />, document.getElementById("root"));
});
