from sqlalchemy.orm import Session

from app.repository.task_repository import TaskRepository
from app.schema.task_schema import CreateTaskDTO

class TaskService:
    @staticmethod
    def create_task(
        db: Session,
        data: CreateTaskDTO
    ):
        return TaskRepository.create_task(
            db=db,
            data=data
        )
    @staticmethod
    def update_task( task_id, db:Session, data:CreateTaskDTO):
        return TaskRepository.update_task(
            task_id=task_id,db=db, data=data
        )
    @staticmethod
    def get_task(task_id, db:Session):
        return TaskRepository.get_task_by_id(task_id=task_id, db=db)
    
    @staticmethod
    def get_all_tasks( user_id, db:Session):
        try:
             return TaskRepository.get_all_tasks(user_id=user_id, db=db)
        except Exception as X:
            print(X)
            

    @staticmethod
    def delete_task(task_id, db:Session):
        return TaskRepository.delete_task(task_id=task_id, db=db)


 