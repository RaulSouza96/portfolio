@echo off
title Portfolio Raul - Servidor Local
cd /d "C:\Users\rauls\Desktop\Portfolio-Raul"
echo Ligando o portfolio...
start "" http://localhost:5174
call npm run dev -- --port 5174 --strictPort
pause
