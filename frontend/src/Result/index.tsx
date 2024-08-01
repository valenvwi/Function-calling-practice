import React from "react";
import { Suggestion } from "../types";

type Props = {
  suggestion: Suggestion;
  cusine: string;
  diet: string;
  spicy: string;
  setShowResult: (showResult: boolean) => void;
};

export default function Result({
  suggestion,
  cusine,
  diet,
  spicy,
  setShowResult,
}: Props) {
  return (
    <div>
      <button
        className="back-button"
        onClick={() => {
          setShowResult(false);
        }}
      >
        Back
      </button>
      <h3>You have chose:</h3>
      <span>{cusine}</span>
      {diet !== "" && <span>{diet}</span>}
      <span>{spicy}</span>

      {suggestion.name ? (
        <div>
          <div className="flex-space-around">
            <h4>{suggestion.name}</h4>
            <div className="flex">
              <p className="gray-text">Preparation time:</p>{" "}
              <p>{suggestion.preparationTime} minutes</p>{" "}
            </div>
          </div>
          <div>
            <p className="gray-text">Recipe:</p> <p> {suggestion.recipe}</p>
          </div>
        </div>
      ) : (
        <div className="flex-center">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
