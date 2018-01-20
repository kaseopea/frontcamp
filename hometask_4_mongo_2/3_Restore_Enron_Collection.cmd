@echo off
echo MONGODB HOMETASK 2
echo.
echo 1. Unzip Enron dump
echo.
"7z_x64/7za.exe" e enron.7z -o./ -spf
pause

echo.
echo 2. Restore Enron Database dump
echo.
mongorestore -d frontcamp-rusau -c enron ./dump/enron/messages.bson
pause