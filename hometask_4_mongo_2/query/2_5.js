/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry).
* Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc).
* Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } }
* */

var query = [
    {
        $match: {
            originCountry: 'United States'
        }
    },
    {
        $group: {
            _id: {
                state: '$originState',
                city: '$originCity'
            },
            passengers: {
                $max: '$passengers'
            }
        }
    },
    {
        $project: {
            _id: 0,
            state: '$_id.state',
            city: '$_id.city',
            maxPassengers: '$passengers'
        }
    },
    {
        $sort: {
            'state': 1
        }
    },
    {
        $group: {
            _id: '$state',
            city: {
                $first: '$city'
            },
            maxPassengers: {
                $max: '$maxPassengers'
            }
        }
    },
    {
        $sort: {
            '_id': 1
        }
    },
    {
        $limit: 5
    }
];
cursor = db.airlines.aggregate(query);


/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}