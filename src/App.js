import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //user
  const [inputText, setInputText] = useState("");
  //ai
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("/api/openai", {
        message: inputText,
      });
      setResponse(res.data);
      console.log(res, "setResponse");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center font-mono text-white">
      <p className="mb-10 text-3xl">Any question about Mia?</p>
      <div className="w-1/2 h-4/5 bg-gray-800 rounded-lg flex flex-col justify-between">
        <p className="float-right">You:{inputText}</p>
        <p>Mia's Bot:{response}</p>

        <div className="bg-gray-600 rounded-lg h-14 mt-auto justify-between flex items-center">
          <input
            id="userText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Message Mia..."
            className="bg-gray-600 rounded-lg h-14 mt-auto ml-4 w-full"
          ></input>
          <button onClick={sendMessage} className="bg-gray-800 h-10 rounded-lg w-16 mr-4">
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
