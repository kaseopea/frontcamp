@echo off
echo MONGODB HOMETASK 2
echo Task 4 Aggregate Enron Collection

echo.
echo 1. Pairs of people that tend to communicate a lot.
echo.
echo 2. Which pair of people have the greatest number of messages in the dataset?
echo.
set /p TASKN=Enter subtask number to run (1-2):

IF "%TASKN%"=="1" GOTO task1
IF "%TASKN%"=="2" GOTO task2
echo No task was selected. Exit

EXIT /B %ERRORLEVEL%

:task1
echo #4.1 Result:
mongo frontcamp-rusau --eval "load('query/4_1.js')"
pause
EXIT /B 0

:task2
echo #4.2 Result:
mongo frontcamp-rusau --eval "load('query/4_2.js')"
pause
EXIT /B 0