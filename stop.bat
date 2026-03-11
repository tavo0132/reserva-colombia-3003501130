@echo off
echo.
echo =========================================
echo  DETENIENDO SERVIDOR
echo =========================================
echo.

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5500') do (
    taskkill /PID %%a /F
    echo Proceso detenido: %%a
)

echo.
echo Servidor detenido correctamente.
echo.
pause
