@echo off
chcp 65001 >nul
title CAFE ĂN VẶT TRẠM KHỞI NGHIỆP - SERVER CỤC BỘ
cd /d "%~dp0"
echo ========================================================
echo  ☕ KHỞI ĐỘNG HỆ THỐNG CAFE ĂN VẶT TRẠM KHỞI NGHIỆP
echo  📍 36/5E Nguyễn Thị Ngâu, Trung Đông 8, Đông Thạnh, TP.HCM
echo ========================================================
echo  🌐 Đang chạy tại cổng: http://localhost:8089
echo ========================================================
node serve_cafe.cjs
pause
