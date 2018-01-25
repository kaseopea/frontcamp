@echo off
echo MONGODB HOMETASK 2
echo MongoDB should be installed
echo MongoDB binaries should be in your PATH environment variable
echo.
echo Task 2. Import Import Airline Collection to "frontcamp-rusau" database
echo.
pause
mongoimport.exe -d frontcamp-rusau -c airlines --type csv --headerline --file airlines.csv
echo.
echo Verify that the number of the documents in the airlines collection is 186648
mongo frontcamp-rusau --eval "db.airlines.count()"
pause

EXIT /B 0
