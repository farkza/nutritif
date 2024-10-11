from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Autoriser les origines spécifiques pour les requêtes CORS
origins = [
    "http://localhost",
]

# Ajouter le middleware CORS à votre application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# Montage du dossier d'images pour être servi par FastAPI
app.mount("/img", StaticFiles(directory="img"), name="img")

# Montage du dossier 'app' pour les fichiers statiques
app.mount("/static", StaticFiles(directory="app"), name="static")

# Affiche la page index à la racine de l'application
@app.get("/", tags=["Index"])
async def read_index():
    return FileResponse("app/index.html")
