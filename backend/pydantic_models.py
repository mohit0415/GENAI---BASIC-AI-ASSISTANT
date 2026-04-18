from pydantic import BaseModel

class Prompt(BaseModel):
    prompt : str

class ResponseDTO(BaseModel):
    status : int
    msg : str
    resObj : object