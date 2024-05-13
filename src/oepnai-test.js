import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";

function OpenAIAssistant() {
  useEffect(() => {
    async function fetchResponse() {
      try {
        const openai = new OpenAI({
          apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "gpt-3.5-turbo",
        });

        setResponse(completion.choices[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchResponse();
  }, []);

  return (
    <div>
      <p>Response from AI: {response}</p>
    </div>
  );
}

export default OpenAIAssistant;
