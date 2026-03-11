@echo off
echo.
echo =========================================
echo  INICIANDO SERVIDOR - Reserva Colombia
echo =========================================
echo.
echo Servidor disponible en:
echo   - Escritorio: http://127.0.0.1:5500
echo   - Red Local:  http://192.168.1.8:5500
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

cd /d "%~dp0"
python -m http.server 5500

pause
