@echo off
REM Chemin vers le dossier du projet
set PROJECT_PATH=%~dp0

REM Aller dans le dossier du projet
cd %PROJECT_PATH%

REM Vérifier si Node.js est installé
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js n'est pas installé. Veuillez installer Node.js avant de continuer.
    pause
    exit /b
)

REM Vérifier si les dépendances sont installées
if not exist "node_modules" (
    echo Installation des dépendances...
    npm install
)

REM Démarrer le serveur backend
echo Démarrage du serveur backend...
start cmd /k "node app.js"

REM Attendre quelques secondes pour que le serveur démarre
timeout /t 5 >nul

REM Ouvrir index.html dans le navigateur par défaut
echo Ouverture de index.html dans le navigateur...
start "" "%PROJECT_PATH%index.html"

echo L'application a été lancée avec succès !
pause