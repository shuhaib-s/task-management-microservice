from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..service.task_service import TaskService
from ..schema.task_schema import CreateTaskDTO
from ..core.db import get_db
from ..middlewares.auth_middleware import verify_user
router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)


@router.get("/")
async def get_tasks( user_id:int = None, user= Depends(verify_user),db: Session = Depends(get_db)):
    user_id = user["id"]
    result =  TaskService.get_all_tasks(db=db, user_id=user_id)
    return {
        "sucess":True,
        "data":result
    }

@router.post("/")
async def create_task(
    data: CreateTaskDTO,
    user= Depends(verify_user),
    db: Session = Depends(get_db)
):
    user_id = user["id"]
    task_data = data
    task_data.user_id = user_id
    task = TaskService.create_task(
        db=db,
        data=task_data
    )

    return {
        "success": True,
        "task": task
    }

@router.put("/{task_id}")
async def update_task(task_id, data:CreateTaskDTO,  user= Depends(verify_user), db: Session = Depends(get_db)):
    user_id = user["id"]
    task_data = data
    task_data.user_id = user_id
    task = TaskService.update_task(
        db=db,
        data=data,
        task_id=task_id,
        user_id=user_id,

    )
    return {
        "success": True,
        "task": task
    }

@router.delete("/{task_id}")
async def delete_task(task_id,user= Depends(verify_user), db: Session = Depends(get_db)):
     user_id = user["id"]
     TaskService.delete_task(user_id=user_id,task_id=task_id, db=db)

@router.get("/{task_id}")
async def get_task(task_id,user= Depends(verify_user), db: Session = Depends(get_db)):
    user_id = user["id"]
    data = TaskService.get_task(user_id=user_id,task_id=task_id, db=db)
    {
        "success": True,
        "task": data
    }
