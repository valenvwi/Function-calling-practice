import React from "react";

type Props = {
  name: string;
  choice: string;
  setChoice: (name: string) => void;
};
export const ChoiceButton = ({ name, choice, setChoice }: Props) => {
  return (
    <button
      key={name}
      onClick={() => {
        setChoice(name);
      }}
      className={name === choice ? "selected-button" : ""}
    >
      {name}
    </button>
  );
};
