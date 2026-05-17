from app.core.env import JWT_SECRETE
import jwt
def verify_token(token):
    payload = jwt.decode(
        token,
        JWT_SECRETE,
        algorithms=["HS256"]
    )

    return payload