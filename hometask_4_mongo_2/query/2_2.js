/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 2. What are the top 3 destination cities outside of the United States (destCountry field, not included)
* with the highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }
* */

var query = [
    {
        $match: {
            destCountry: {
                $ne: 'United States'
            }
        }
    },
    {
        $group: {
            _id: '$destCity',
            avgPassangers: {
                $avg: "$passengers"
            }
        }
    },
    {
        $sort: {
            avgPassangers: -1
        }
    },
    {
        $limit : 3
    },
    {
        $project: {
            '_id': 0,
            'city': '$_id',
            'avgPassangers': 1
        }
    }
];

/* Output 1*/
cursor = db.airlines.aggregate(query);
while (cursor.hasNext()) {
    printjson(cursor.next());
}