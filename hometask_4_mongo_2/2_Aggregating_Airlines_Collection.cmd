@echo off
echo MONGODB HOMETASK 2
echo Task 2 Aggregating Airlines Collection

echo.
echo 1. How many records does each airline class have? Use $project to show result as { class: "Z", total: 999 }
echo.
echo 2. What are the top 3 destination cities outside of the United States (destCountry field, not included) with the highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }
echo.
echo 3. Which carriers provide flights to Latvia (destCountry)? Show result as one document { "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }
echo.
echo 4. What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as { "_id" : "<carrier>", "total" : 999}
echo.
echo 5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry). Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc). Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }
echo.

set /p TASKN=Enter subtask number to run (1-5):

IF "%TASKN%"=="1" GOTO task1
IF "%TASKN%"=="2" GOTO task2
IF "%TASKN%"=="3" GOTO task3
IF "%TASKN%"=="4" GOTO task4
IF "%TASKN%"=="5" GOTO task5

echo No task was selected. Exit

EXIT /B %ERRORLEVEL%

:task1
echo #2.1 Result:
mongo frontcamp-rusau --eval "load('query/2_1.js')"
pause
EXIT /B 0

:task2
echo #2.2 Result:
mongo frontcamp-rusau --eval "load('query/2_2.js')"
pause
EXIT /B 0

:task3
echo #2.3 Result:
mongo frontcamp-rusau --eval "load('query/2_3.js')"
pause
EXIT /B 0

:task4
echo #2.4 Result:
mongo frontcamp-rusau --eval "load('query/2_4.js')"
pause
EXIT /B 0

:task5
echo #2.5 Result:
mongo frontcamp-rusau --eval "load('query/2_5.js')"
pause
EXIT /B 0