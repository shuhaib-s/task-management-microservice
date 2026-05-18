from dotenv import load_dotenv
import os
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
JWT_SECRETE = os.getenv("JWT_SECRETE","changeme")
RABIT_MQ_URL= os.getenv("RABIT_MQ_URL","amqp://guest:guest@localhost:5672")