from sqlalchemy.orm import Session


class BaseRepository:
    def save(
        self,
        entity,
        db
    ):
        db.add(entity)
        db.commit()
        db.refresh(entity)
        return entity
    
 