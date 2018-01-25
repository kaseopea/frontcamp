/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 3. Which carriers provide flights to Latvia (destCountry)?
* Show result as one document { "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }
* */

var query = [
    {
        $match: {
            destCountry: 'Latvia'
        }
    },
    {
        $group: {
            _id: '$destCountry',
            carriers: {
                $addToSet: '$carrier'
            }
        }
    }
];
cursor = db.getCollection('airlines').aggregate(query);

/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}