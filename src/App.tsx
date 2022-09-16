import React from "react";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Хомец fdsf </h1>
        <Home />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
