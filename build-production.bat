@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo Installation des dependances...
  call npm install
  if errorlevel 1 (
    echo [ERREUR] L'installation npm a echoue.
    pause
    exit /b 1
  )
)
echo Construction de la version production...
call npm run build
if errorlevel 1 (
  echo [ERREUR] Le build a echoue.
  pause
  exit /b 1
)
echo.
echo Build termine. Le dossier de deploiement est : dist\
pause
endlocal
