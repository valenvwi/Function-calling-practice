from openai import OpenAI
import os
from dotenv import load_dotenv
import json

load_dotenv()

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Full documentation of function calling here below:
# https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models

tools = [
    {
    "type": "function",
    "function" :{
    "name": "food_suggestion",
    "description": "This function will give food suggestions based on the user's preference.",
    "parameters": {
        "type": "object",
        "properties": {
            "food_name": {
                "type": "string",
                "description": "The name of the food"
            },
            "food_recipe": {
                "type": "string",
                "description": "The recipe of the food"
            },
            "preparation_time": {
                "type": "integer",
                "description": "The time required to prepare the food in minutes"
        },
        },
        "required": ["food_name", "food_recipe", "preparation_time"]
    }
    }
}
]

def get_answer_from_gpt(
    cusine: str,
    diet: str,
    spicy: str,
):

    messages=[
        {"role": "system", "content": "You are a chef that knows all kind of recipes and you can give food suggestion and share the recipe to the client."},
        {"role": "user", "content": f"I would like to get {cusine} food which is {spicy}."}
    ]
    if diet:
        messages.append({"role": "user", "content": f"I would like to have a {diet} diet."})

    gpt_response = function_call(messages)
    response = {"food_name": "",  "food_recipe": "", "preparation_time": 0}
    if gpt_response:
        arguments = json.loads(gpt_response[0].function.arguments)
        response["food_name"] = arguments['food_name']
        response["food_recipe"] = arguments['food_recipe']
        response["preparation_time"] = arguments['preparation_time']

    return response


def function_call(messages):
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=tools,
            tool_choice={"type": "function", "function": {"name": "food_suggestion"}}
        )

        response = response.choices[0].message
        tool_calls = response.tool_calls
        if tool_calls:
            return tool_calls
        else:
            raise Exception("No tool calls found in the response")
    except Exception as e:
        print(f"Exception: {e}")
        return e
