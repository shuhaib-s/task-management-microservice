from fastapi import FastAPI
from app.core.env import RABIT_MQ_URL
from app.core.db import Base, engine
from app.model.task_model import Task
from app.api.task_api import router as task_router
from app.rabitmq.connection import RabitMq
app = FastAPI()


RabitMq.connect(RABIT_MQ_URL)
# CREATE TABLES
Base.metadata.create_all(bind=engine)
app.include_router(task_router)
