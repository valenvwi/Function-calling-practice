# Food Suggestion App

This is a simple app mainly to test out function calling. The user can choose what kind of cuisine they want and other dietary options, and will get a suggestion. The focus of this app is on function calling, and it uses a minimal UI setup.

## Demo Pictures

![random1](https://github.com/user-attachments/assets/a1bee8ae-601c-4f35-af05-cc3541aa97b3)

![random2](https://github.com/user-attachments/assets/e9629391-525f-4fdb-8494-0eec30d0a5c0)


## Tech Stack

- **Backend:**
  - Python
  - FastAPI
- **Frontend:**
  - React
  - TypeScript
  - Vite

## Features

- Select cuisine type and dietary preferences, and get a food suggestion with a recipe and preparation time

## Getting Started

This project can be run using Docker. You need to place your OpenAI key in the backend/.env file. Follow the instructions below to build and run the containers:

  ```bash
    docker compose build
    docker compose up
  ```


If you don't have Docker, follow the instructions below.

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
