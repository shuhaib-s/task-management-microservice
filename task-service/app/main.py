from fastapi import FastAPI
from app.core.db import Base, engine
from app.model.task_model import Task
from app.api.task_api import router as task_router
app = FastAPI()


# CREATE TABLES
Base.metadata.create_all(bind=engine)
app.include_router(task_router)
