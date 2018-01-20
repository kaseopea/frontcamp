/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry).
* Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc).
* Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }
* */

cursor = db.airlines.aggregate([
    {

    }
]);

/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}