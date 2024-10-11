# Utiliser une image de base Python légère
FROM python:3.9-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier de dépendances (requirements.txt) dans l'image Docker
COPY requirements.txt .

# Installer les dépendances via pip
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application tourne (FastAPI tourne sur le port 8000 par défaut)
EXPOSE 8000

# Commande pour lancer l'application avec Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
