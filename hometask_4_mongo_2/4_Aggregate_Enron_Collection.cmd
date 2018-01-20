@echo off
echo MONGODB HOMETASK 2
echo Task 4 Aggregate Enron Collection
echo.
echo 1. Which pair of people have the greatest number of messages in the dataset?
echo.
echo #4 Result:
mongo frontcamp-rusau --eval "load('query/4_1.js')"
pause
EXIT /B 0
