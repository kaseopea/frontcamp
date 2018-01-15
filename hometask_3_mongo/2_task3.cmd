@echo off
echo MongoDB Task 3 Querying Restaurants Collection

echo.
echo 1. How many "Chinese" (cuisine) restaurants are in "Queens" (borough)
echo.
echo 2. What is the _id of the restaurant which has the grade with the highest ever score?
echo.
echo 3. Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in "Manhattan" (borough)
echo.
echo 4. What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.
echo.
echo 5. What are _id and borough of "Seafood" (cuisine) restaurants which received at least one "B" grade in period from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.
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
echo #3.1 Result:
mongo frontcamp-rusau --eval "db.restaurants.find({ cuisine: 'Chinese', borough: 'Queens'}).count()"
pause
EXIT /B 0

:task2
echo #3.2 Result:
mongo frontcamp-rusau --eval "db.restaurants.find({}, { _id: 1 }).sort({ 'grades.score': -1 }).limit(1).pretty()"
pause
EXIT /B 0

:task3
echo #3.3 Result:
mongo frontcamp-rusau --eval "db.restaurants.updateMany({ borough: 'Manhattan' }, { $push: { grades: { grade: 'A', score: 7, date: new ISODate() } } })"
pause
EXIT /B 0

:task4
echo #3.4 Result:
mongo frontcamp-rusau --eval "db.restaurants.find({ 'grades.8.score': { '$lt': 7 } }, { _id: 0, name: 1 }).pretty()"
pause
EXIT /B 0

:task5
echo #3.5 Result:
mongo frontcamp-rusau --eval "db.restaurants.find({ cuisine: 'Seafood', grades: { $elemMatch: { grade: 'B', date: { $gte: new ISODate('2014-02-01'), $lte: new ISODate('2014-03-01') } } } }, { borough: 1 })"
pause
EXIT /B 0