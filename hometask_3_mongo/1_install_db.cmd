@echo off
echo MongoDB should be installed
echo MongoDB binaries should be in your PATH environment variable
echo .
echo Task 2. Import Restaurants Collection to "frontcamp-rusau" database
echo .
pause
mongoimport --db frontcamp-rusau --collection restaurants --file restaurants.json
echo.
echo Verify that the number of the documents in the restaurants collection is 25359
mongo frontcamp-rusau --eval "db.restaurants.count()"
pause

EXIT /B 0