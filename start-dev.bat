@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Node.js n'est pas installe ou n'est pas dans le PATH.
  echo Installez Node.js 20+ puis relancez ce fichier.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installation des dependances...
  call npm install
  if errorlevel 1 (
    echo [ERREUR] L'installation npm a echoue.
    pause
    exit /b 1
  )
)
echo Demarrage du portfolio...
call npm run dev
endlocal
