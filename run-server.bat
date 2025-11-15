@echo off
REM Script para abrir a Apostila em um servidor local Python
REM Funciona em Windows com Python instalado

echo.
echo ================================================
echo  Apostila de Informatica - Servidor Local
echo ================================================
echo.

REM Verifica se Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Python nao encontrado no sistema.
    echo.
    echo Solucoes:
    echo 1. Instale Python de https://www.python.org/
    echo 2. Abra o arquivo index.html diretamente no navegador
    echo.
    pause
    exit /b 1
)

REM Obtém a versão do Python
for /f "tokens=2" %%i in ('python --version 2^>^&1') do set PYTHON_VERSION=%%i
echo [OK] Python %PYTHON_VERSION% encontrado

REM Detecta a pasta do projeto
cd /d "%~dp0"
set PROJECT_PATH=%cd%

echo [OK] Caminho do projeto: %PROJECT_PATH%
echo.

REM Inicia o servidor HTTP
echo Iniciando servidor HTTP na porta 8000...
echo.
echo ================================================
echo URL Local: http://localhost:8000
echo ================================================
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

python -m http.server 8000 --directory "%PROJECT_PATH%"

pause
