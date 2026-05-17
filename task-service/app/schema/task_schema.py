from pydantic import BaseModel
class CreateTaskDTO(BaseModel):
    title: str
    description: str
    user_id: str
 
