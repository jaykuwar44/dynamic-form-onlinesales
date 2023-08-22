import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header">
          <h1>Dynamic Form Generator</h1>
        </header>
        <main className="app-content">
          <Form />
        </main>
      </div>
    </div>
  );
}

export default App;
