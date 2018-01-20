/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 4. What are the carriers which flue the most number of passengers from the United State
* to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3).
* Show result as { "_id" : "<carrier>", "total" : 999}
* */

var query = [
    {
        $match: {
            originCountry: 'United States',
            destCountry: {
                $in: ['Greece', 'Italy', 'Spain']
            }
        }
    },
    {
        $group: {
            _id: '$carrier',
            total: {
                $max: '$passengers'
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $skip: 3
    },
    {
        $limit : 7
    }
];
cursor = db.airlines.aggregate(query);

/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}