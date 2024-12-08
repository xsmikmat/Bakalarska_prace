from datetime import datetime

from pydantic import BaseModel


class Rezervace (BaseModel):
    id: int | None=None
    od: datetime
    do: datetime
    prijemni: str
    email: str
    telefon: str
    potvrzeni: bool=False
    # def __init__(self, id: int, od: datetime, do: datetime, prijemni: str, email: str, telefon: str, potvrzeni: bool):
    #     self.id = id
    #     self.od = od
    #     self.do = do
    #     self.prijemni = prijemni
    #     self.email = email
    #     self.telefon = telefon
    #     self.potvrzeni = potvrzeni

class Rezervace_post (BaseModel):
    od: str
    do: str
    prijemni: str
    email: str
    telefon: str