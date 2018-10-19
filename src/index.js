import React from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/assembly_required");

class Square extends React.Component {
    render() {
        return (
           <button>{this.props.value}</button>
        );
    }
}

class Grid extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        return (
            <div>
              <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
              </div>
            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
              </div>
            </div>
        );
    }
}

wasm.then(wasm => {
    const App = () => {
        return (
           <div>
             <h1>Hello world!</h1>
             <Grid />
             <button onClick={wasm.rah}>rah</button>
           </div>
        );
    };
    ReactDOM.render(<App />, document.getElementById("root"));
});
