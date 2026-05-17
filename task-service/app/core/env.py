from dotenv import load_dotenv
import os
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
JWT_SECRETE = os.getenv("JWT_SECRETE","changeme")
