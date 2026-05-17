from fastapi import Header, HTTPException
from app.utils.jwt import verify_token

def verify_user( authorization: str = Header(None)):
    if not authorization:
        raise  HTTPException(
            status_code=401,
            detail="Authorization header missing"
        )
    payload = verify_token(authorization)

    return payload
