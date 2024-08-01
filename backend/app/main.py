from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import messages

app = FastAPI()

app.include_router(messages.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

# for testing purpose
# @app.get("/")
# async def root():
#     return {"message": "Hello, world!"}
