import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard";

function Example() {
    return (
        <div className="layout">
            <Dashboard />
        </div>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
