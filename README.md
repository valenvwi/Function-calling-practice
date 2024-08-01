# Food Suggestion App

This is a simple app mainly to test out function calling. The user can choose what kind of cuisine they want and other dietary options, and will get a suggestion. The focus of this app is on function calling, and it uses a minimal UI setup.

## Demo Pictures
![random1](https://github.com/user-attachments/assets/b23793b9-357e-4a80-8ff0-e56164fa1457)

![random2](https://github.com/user-attachments/assets/ed61bb28-4f7b-470e-a9bf-9a2d7c8a2fd9)



## Tech Stack

- **Backend:**
  - Python
  - FastAPI
- **Frontend:**
  - React
  - TypeScript
  - Vite

## Features

- Select cuisine type
- Choose dietary preferences
- Get a food suggestion with a recipe and preparation time

## Getting Started

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn
- OpenAI API Key (you need to get your own OpenAI key and store it in your `.env` file)

For more information, refer to the [OpenAI documentation](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models).

### Backend Setup

1. Clone the repository:
    ```bash
    gh repo clone valenvwi/Function-calling-practice
    cd Function-calling-practice
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Enter your preferences for cuisine, diet, and spice level.
3. Click the "Get the idea now" button to receive a food suggestion along with the recipe and preparation time.
