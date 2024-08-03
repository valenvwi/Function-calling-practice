import { useState } from "react";
import "./App.css";
import Question from "./Question";
import { Suggestion } from "./types";
import Result from "./Result";
import {
  fetchSuggestions,
  validateChoices,
} from "./Question/utils/fetchSuggestions";

function App() {
  // State for setting value for handle submit
  const [cusine, setCusine] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [spicy, setSpicy] = useState<string>("");

  // State for showing error message when the user doesn't select cusine and spicy choice
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);

  // State for handling the content we show to the user
  const [pageState, setPageState] = useState<
    "Question" | "Loading" | "Result Success" | "Result Fail"
  >("Question");

  // State for showing the suggestion/ result
  const [suggestion, setSuggestion] = useState<Suggestion>({} as Suggestion);

  const handleSubmit = async () => {
    // Check if the user has selected cusine and spicy choice
    if (!validateChoices(cusine, spicy, setShowErrorMsg)) return;

    setSuggestion({} as Suggestion);
    // Go to the result page and show the spinner
    setPageState("Loading");

    try {
      const data = await fetchSuggestions(cusine, diet, spicy);
      setSuggestion({
        name: data.food_name,
        recipe: data.food_recipe,
        preparationTime: data.preparation_time,
      });

      // Show the suggestion by gpt
      setPageState("Result Success");
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      // Show the error message of result
      setPageState("Result Fail");
    }
  };

  return (
    <>
      {pageState === "Question" ? (
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
          pageState={pageState}
          setPageState={setPageState}
        />
      )}
    </>
  );
}

export default App;
