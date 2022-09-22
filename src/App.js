import React from "react";

import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>React Search Engine</h1>
      <Search />
      <a
        href="https://github.com/MimiB96/my-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        Open-source Code
      </a>
      ... by Mimi Bribena.
    </div>
  );
}

export default App;
