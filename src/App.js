import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center font-mono text-white">
      <p className="mb-10 text-3xl">Any question about Mia?</p>
      <div className="w-1/2 h-4/5 bg-gray-800 rounded-lg flex flex-col justify-between">
        <p>Mia's Bot:</p>
        <div className="bg-gray-600 rounded-lg h-14 mt-auto justify-between flex items-center">
          <input
            placeholder="Message Mia..."
            className="bg-gray-600 rounded-lg h-14 mt-auto ml-4"
          ></input>
          <button className="bg-gray-800 h-10 rounded-lg w-16 mr-4">send</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
