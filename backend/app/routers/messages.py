from fastapi import APIRouter, Request
from app.utils.chatgpt import get_answer_from_gpt

router = APIRouter()

@router.post("/messages", tags=["messages"])
async def get_message(request: Request):
    data = await request.json()
    cusine = data.get("cusine")
    diet = data.get("diet")
    spicy = data.get("spicy")
    response = get_answer_from_gpt(cusine, diet, spicy)
    return response
