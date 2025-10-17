from fastapi import FastAPI, HTTPException
from models.userModel import User
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="chatOnline"
) 

@app.get("/")  
def home():
    return {"message": "Hola, mundo"}

@app.post("/create_users")  
def createUser(user: User):
    cursor = conn.cursor()
    cursor.execute("INSERT INTO `users`(`username`, `password`) VALUES (%s,%s)", (user.username, user.password))
    conn.commit()
    return {"message": "Usuario creado correctamente"}

@app.post("/login")  
def getUsers(user: User):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM `users` WHERE `username`=%s AND `password`=%s", (user.username, user.password))
    users = cursor.fetchone()
    if not users:
        raise HTTPException(status_code=401, detail="Usuario o contraseña incorrectos")
    return {"message": "Login exitoso", "user": {"id": users[0], "username": users[1]}}
