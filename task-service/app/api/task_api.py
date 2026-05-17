from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..service.task_service import TaskService
from ..schema.task_schema import CreateTaskDTO
from ..core.db import get_db

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)


@router.get("/")
async def get_tasks( user_id:int = None, db: Session = Depends(get_db)):
    if user_id is None:
        return {
        "sucess":False,
        "data":[]
        }

    result =  TaskService.get_all_tasks(db=db, user_id=user_id)
    return {
        "sucess":True,
        "data":result
    }

@router.post("/")
async def create_task(
    data: CreateTaskDTO,
    db: Session = Depends(get_db)
):
    task = TaskService.create_task(
        db=db,
        data=data
    )

    return {
        "success": True,
        "task": task
    }

@router.put("/{task_id}")
async def update_task(task_id, data:CreateTaskDTO,  db: Session = Depends(get_db)):
    task = TaskService.update_task(
        db=db,
        data=data,
        task_id=task_id

    )
    return {
        "success": True,
        "task": task
    }

@router.delete("/{task_id}")
async def delete_task(task_id, db: Session = Depends(get_db)):
     TaskService.delete_task(task_id=task_id, db=db)

@router.get("/{task_id}")
async def get_task(task_id, db: Session = Depends(get_db)):
    data = TaskService.get_task(task_id=task_id, db=db)
    {
        "success": True,
        "task": data
    }
