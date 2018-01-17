@echo off
echo MongoDB Task 4 Indexing Restaurants Collection

echo.
echo 1. Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the index is indeed used by the winning plan: db.restaurants.find({ name: "Glorious Food" })
echo.
echo 2. Drop index from task 4.1
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
echo #4.1 Result:
mongo frontcamp-rusau --eval "db.restaurants.createIndex( { name: 1 } )"
mongo frontcamp-rusau --eval "db.restaurants.find({ name: 'Glorious Food' }).explain('executionStats')"
pause
EXIT /B 0

:task2
echo #4.2 Result:
mongo frontcamp-rusau --eval "db.restaurants.dropIndex( { name: 1 })"
pause
EXIT /B 0

:task3
echo #4.3 Result:
mongo frontcamp-rusau --eval "db.restaurants.createIndex( { restaurant_id: 1 }, { unique: true } )"
mongo frontcamp-rusau --eval "db.restaurants.find({ restaurant_id: '41098650' }, { _id: 0, borough: 1 }).explain('executionStats')"
pause
EXIT /B 0

:task4
echo #4.4 Result:
mongo frontcamp-rusau --eval "db.restaurants.createIndex( { cuisine: 1 }, { partialFilterExpression: { borough: 'Staten Island'} } )"
echo.
echo IXSCAN
echo.
mongo frontcamp-rusau --eval "db.restaurants.find({ borough: 'Staten Island', cuisine: 'American' }).explain('executionStats')"
echo.
echo COLLSCAN
echo.
mongo frontcamp-rusau --eval "db.restaurants.find({ borough: 'Staten Island', name: 'Bagel Land' }).explain('executionStats')"
echo.
echo COLLSCAN
echo.
mongo frontcamp-rusau --eval "db.restaurants.find({ borough: 'Queens', cuisine: 'Pizza' }).explain('executionStats')"
pause
EXIT /B 0

:task5
echo #4.5 Result:
mongo frontcamp-rusau --eval "db.restaurants.createIndex( { 'grades.8.score': 1 } )"
mongo frontcamp-rusau --eval "db.restaurants.find({ 'grades.8.score': { '$lt': 7 } }, { _id: 0, name: 1 }).explain('executionStats')"
pause
EXIT /B 0