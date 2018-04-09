@echo off
echo MongoDB should be installed
echo MongoDB binaries should be in your PATH environment variable
echo .
echo Part 1. Import Plips Collection to "rusau-blogs" database
echo .
pause
mongoimport --db rusau-blogs --collection plips --file plips.json
echo .
echo Part 2. Import Posts Collection to "rusau-blogs" database
echo .
pause
mongoimport --db rusau-blogs --collection posts --file posts.json

echo .
echo Part 3. Import Users Collection to "rusau-blogs" database
echo .
pause
mongoimport --db rusau-blogs --collection users --file users.json

pause

EXIT /B 0