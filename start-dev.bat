@echo off
echo Starting Barento Hashum Portfolio...
echo.
echo Starting Backend Server...
start cmd /k "cd backend && npm run dev"
timeout /t 3 /nobreak > nul
echo.
echo Starting Frontend...
start cmd /k "npm run dev"
echo.
echo Portfolio is starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Admin: http://localhost:5173/admin/login
echo.
pause
