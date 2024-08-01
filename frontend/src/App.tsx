import React from "react";
import { useState } from "react";
import "./App.css";
import Question from "./Question";
import { Suggestion } from "./types";
import Result from "./Result";

function App() {
  const [suggestion, setSuggestion] = useState<Suggestion>({} as Suggestion);
  const [cusine, setCusine] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [spicy, setSpicy] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!cusine || !spicy) {
      setShowErrorMsg(true);
      return;
    }

    setShowResult(true);
    setShowErrorMsg(false);
    setSuggestion({} as Suggestion);
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cusine, diet, spicy }),
    };

    await fetch("http://localhost:8000/messages", request)
      .then((response) => response.json())
      .then(async (data) => {
        setSuggestion({
          name: data.food_name,
          recipe: data.food_recipe,
          preparationTime: data.preparation_time,
        });
      });
  };

  return (
    <>
      {!showResult ? (
        <Question
          cusine={cusine}
          setCusine={setCusine}
          diet={diet}
          setDiet={setDiet}
          spicy={spicy}
          setSpicy={setSpicy}
          handleSubmit={handleSubmit}
          showErrorMsg={showErrorMsg}
        />
      ) : (
        <Result
          suggestion={suggestion}
          cusine={cusine}
          diet={diet}
          spicy={spicy}
          setShowResult={setShowResult}
        />
      )}
    </>
  );
}

export default App;
