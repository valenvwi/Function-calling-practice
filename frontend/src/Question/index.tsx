import { cusineChoice, dietChoice, spicyChoice } from "../constants";
import { ChoiceButton } from "./ChoiceButton";

type Props = {
  cusine: string;
  setCusine: (value: string) => void;
  diet: string;
  setDiet: (value: string) => void;
  spicy: string;
  setSpicy: (value: string) => void;
  handleSubmit: () => void;
  showErrorMsg: boolean;
};

export default function Question({
  cusine,
  setCusine,
  diet,
  setDiet,
  spicy,
  setSpicy,
  handleSubmit,
  showErrorMsg,
}: Props) {
  return (
    <div>
      <h2>Don't know what you wanna eat today? Let's get some idea here!</h2>
      <h3>Choose your cusine: *</h3>
      {cusineChoice.map((name) => (
        <ChoiceButton
          key={name}
          name={name}
          choice={cusine}
          setChoice={setCusine}
        />
      ))}

      <h3>Any special diet?</h3>

      {dietChoice.map((name) => (
        <ChoiceButton
          key={name}
          name={name}
          choice={diet}
          setChoice={setDiet}
        />
      ))}

      <h3>How spicy do you want? *</h3>

      {spicyChoice.map((name) => (
        <ChoiceButton
          key={name}
          name={name}
          choice={spicy}
          setChoice={setSpicy}
        />
      ))}

      <br></br>

      <button className="submit-button" onClick={handleSubmit}>
        Get the idea now
      </button>

      {/* Show the error message from the validation */}
      {showErrorMsg && (
        <p className="error-text">
          Please choose the cusine and the spicy level
        </p>
      )}
    </div>
  );
}
