import { backendUrl } from "../../config";

// Function to validate the input
export const validateChoices = (
  cusine: string,
  spicy: string,
  setShowErrorMsg: (value: boolean) => void
) => {
  if (!cusine || !spicy) {
    setShowErrorMsg(true);
    return false;
  }
  setShowErrorMsg(false);
  return true;
};

// HTTP request to fetch the suggestion
export const fetchSuggestions = async (
  cusine: string,
  diet: string,
  spicy: string
) => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cusine, diet, spicy }),
  };

  const response = await fetch(`${backendUrl}/messages`, request);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
