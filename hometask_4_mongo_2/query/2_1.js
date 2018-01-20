/*
* Hometask 2
* Task 2 Aggregating Airlines Collection
* */

/*
* 1. How many records does each airline class have? Use $project to show result as { class: "Z", total: 999 }
* */
cursor = db.airlines.aggregate([
    {
        $group: {
            _id: '$class',
            total: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            class: '$_id',
            total: 1
        }
    }
]);

/* Output */
while (cursor.hasNext()) {
    printjson(cursor.next());
}