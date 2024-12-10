from datetime import datetime
from fastapi import FastAPI, HTTPException
from rezervace import Rezervace, Rezervace_post
from fastapi.middleware.cors import CORSMiddleware

array = [
    Rezervace(
        id=1,
        od="2024-12-10 14:00",
        do="2024-12-10 16:00",
        prijemni="John Doe",
        email="johndoe@example.com",
        telefon="123456789",
        potvrzeni=True
    ),
    Rezervace(
        id=2,
        od="2024-12-11 09:00",
        do="2024-12-11 11:00",
        prijemni="Jane Smith",
        email="janesmith@example.com",
        telefon="987654321",
        potvrzeni=False
    ),
    Rezervace(
        id=3,
        od="2024-12-12 10:00",
        do="2024-12-12 12:00",
        prijemni="Alice Johnson",
        email="alicej@example.com",
        telefon="555123456",
        potvrzeni=True
    ),
    Rezervace(
        id=4,
        od="2024-12-13 14:30",
        do="2024-12-13 16:30",
        prijemni="Bob Williams",
        email="bobwilliams@example.com",
        telefon="456789123",
        potvrzeni=False
    ),
    Rezervace(
        id=5,
        od="2024-12-14 08:00",
        do="2024-12-14 09:30",
        prijemni="Charlie Brown",
        email="charlieb@example.com",
        telefon="789456123",
        potvrzeni=True
    ),
    Rezervace(
        id=6,
        od="2024-12-15 11:00",
        do="2024-12-15 12:30",
        prijemni="Daisy Miller",
        email="daisym@example.com",
        telefon="321654987",
        potvrzeni=True
    )
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/rezervace")
async def reservationDates ():
    if array==[]:
        return array
    return [(rezervace.od,rezervace.do)for rezervace in array]

@app.get("/")
async def reservation ():
    return array

@app.post ("/rezervace")
async def new_reservation (
        od: str="2024-10-10",
        do:str="2024-10-45",
        prijemni: str="5",
        email: str="6468",
        telefon: str="48"):
    rezervace=Rezervace(
        id=None,
        od=datetime.strptime(od,"%Y-%m-%d"),
        do=datetime.strptime(do,"%Y-%m-%d"),
        prijemni=prijemni,
        email=email,
        telefon=telefon,
        potvrzeni=False)
    array.append(rezervace)
    return rezervace