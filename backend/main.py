from fastapi import FastAPI
from ollama import chat
from pydantic_models import ResponseDTO,Prompt
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os
from dotenv import load_dotenv

myapp = FastAPI()

origins = [
    'http://localhost:5173',
    'https://genai-basic-ai-assistant-sq2m-lates.vercel.app',
    'https://mohit-personal-chat-assistant.vercel.app'
]

myapp.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def require_env(item):
    if not item:
        raise ValueError('Missing Env')
    return item

@myapp.post('/asking')
def askOllama(prompt : Prompt):
    load_dotenv()
    try:
        # res = chat(model='llama3',
        #            messages=[{
        #                'role':'user',
        #                'content':prompt.prompt
        #            }])
        API_KEY = require_env(os.getenv('GEMINI_API_KEY'))
        BASE_URL = require_env(os.getenv('GEMINI_BASE_URL'))
        MODEL_NAME = require_env(os.getenv('GEMINI_MODEL'))
        client = OpenAI(
            api_key=API_KEY,
            base_url=BASE_URL
        )
        res = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{
                'role':'user',
                'content':prompt.prompt
            }]
        )
        return ResponseDTO(status=200,msg='Task Completed',resObj=res.choices[0].message.content)
    except ValueError as e:
        return ResponseDTO(status=404,msg='Error',resObj=str(e))
    except Exception as e:
        return ResponseDTO(status=404,msg='Error',resObj=str(e))