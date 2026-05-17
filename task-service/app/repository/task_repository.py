from sqlalchemy.orm import Session

from app.model.task_model import Task
from app.schema.task_schema import (
    CreateTaskDTO
)

from app.repository.base_repository import BaseRepository


class TaskRepositoryClass(BaseRepository):

    # CREATE
    def create_task(
        self,
        data: CreateTaskDTO,
        db: Session
    ):

        task = Task(
            title=data.title,
            description=data.description,
            user_id=data.user_id
        )

        self.save(task, db)

        return task


    # FIND ALL
    def get_all_tasks(
        self,
        user_id: str,
        db: Session,
        
    ):

        return db.query(Task).filter(
            Task.user_id == str(user_id) 
        ).all()


    # FIND ONE
    def get_task_by_id(
        self,
        task_id: int,
        db: Session,
        user_id,
    ):

        return db.query(Task).filter(
            Task.id == int(task_id)
        ).first()


    # UPDATE
    def update_task(
        self,
        task_id: int,
        data: CreateTaskDTO,
        db: Session
    ):

        task = db.query(Task).filter(
            Task.id == task_id
        ).first()

        if not task:
            return None

        if data.title is not None:
            task.title = data.title

        if data.description is not None:
            task.description = data.description

        db.commit()

        db.refresh(task)

        return task


    # DELETE
    def delete_task(
        self,
        task_id: int,
        db: Session
    ):

        task = db.query(Task).filter(
            Task.id == task_id
        ).first()

        if not task:
            return None

        db.delete(task)

        db.commit()

        return task


TaskRepository = TaskRepositoryClass()