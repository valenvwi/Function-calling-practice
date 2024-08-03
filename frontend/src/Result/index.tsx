import { splitRecipeIntoSteps } from "../Question/utils/splitRecipeIntoSteps";
import { Suggestion } from "../types";

type Props = {
  suggestion: Suggestion;
  cusine: string;
  diet: string;
  spicy: string;
  pageState: "Question" | "Loading" | "Result Success" | "Result Fail";
  setPageState: (
    pageState: "Question" | "Loading" | "Result Success" | "Result Fail"
  ) => void;
};

export default function Result({
  suggestion,
  cusine,
  diet,
  spicy,
  pageState,
  setPageState,
}: Props) {
  return (
    <div>
      <button
        className="back-button"
        onClick={() => {
          setPageState("Question");
        }}
      >
        Back
      </button>

      <h3>You have chosen:</h3>
      <span>{cusine}</span>
      {diet && <span>{diet}</span>}
      <span>{spicy}</span>

      {/* Show the spinner when the page is in loading state */}
      {pageState === "Loading" && (
        <div className="flex-center">
          <div className="loader"></div>
        </div>
      )}

      {/* Show the suggestion when the page is in result success state */}
      {pageState === "Result Success" && (
        <div>
          <div className="flex-space-around">
            <h4>{suggestion.name}</h4>
            <div className="flex">
              <p className="gray-text">Preparation time:</p>
              <p>{suggestion.preparationTime} minutes</p>
            </div>
          </div>
          <div>
            <p className="gray-text">Recipe:</p>
            {splitRecipeIntoSteps(suggestion.recipe).map(
              (step: string, index: number) => (
                <p key={index}>{step}</p>
              )
            )}
          </div>
        </div>
      )}

      {/* Show the error message when the page is in result fail state */}
      {pageState === "Result Fail" && (
        <div className="flex-center">
          <p className="error-text">
            Sorry we have some technical issue at this moment. Please make your
            own decision and ask us for suggestion later later.
          </p>
        </div>
      )}
    </div>
  );
}
