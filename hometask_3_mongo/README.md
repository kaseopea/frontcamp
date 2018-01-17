# Task 3 Querying Restaurants Collection


### 3.1  How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?
Query:
db.restaurants.find({ 
	cuisine: 'Chinese', 
	borough: 'Queens'
}).count()

Result: 728



### 3.2 What is the _id of the restaurant which has the grade with the highest ever score?
Query:
db.restaurants.find({}).sort({ "grades.score": -1 }).limit(1).pretty()

Result: ObjectId("5a57222388d276e527e218dc")



### 3.3 Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).
Query:
db.restaurants.updateMany(
   { borough: 'Manhattan' },
   { 
 		$push: { 
 			grades: {
 				grade: "A", 
 				score: 7, 
 				date: new ISODate()
 			}
 		}
   }
)

Result: { "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }



### 3.4 What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.
Query:
db.restaurants.find({ 
	"grades.8.score": { "$lt": 7 } 
	}, { 
	_id: 0, 
	name: 1 
}).pretty()

Result:
{ "name" : "Silver Krust West Indian Restaurant" }
{ "name" : "Pure Food" }




### 3.5 What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.
Query:
db.restaurants.find({ cuisine: 'Seafood', grades: { $elemMatch: { grade: "B", date: { $gte: new ISODate('2014-02-01'), $lte: new ISODate('2014-03-01') } }
} }, { borough: 1 })


Result:
{ "_id" : ObjectId("5a57222488d276e527e24ce6"), "borough" : "Bronx" }
{ "_id" : ObjectId("5a57222488d276e527e24f61"), "borough" : "Manhattan" }



# Indexing Restaurants Collection
### 4.1 Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the index is indeed used by the winning plan:

db.restaurants.find({ name: "Glorious Food" }).explain('executionStats')
"works" : 25361
"docsExamined" : 25359

db.restaurants.createIndex( { name: 1 })

"works" : 2
"docsExamined" : 1



### 4.2 Drop index from task 4.1
db.restaurants.dropIndex( { name: 1 })


### 4.3 Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is indeed covered:

db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).explain('executionStats')
"works" : 25361
"docsExamined" : 25359

db.restaurants.createIndex( { restaurant_id: 1 }, { unique: true } )

"works" : 2
"docsExamined" : 1


### 4.4 Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten Island”:

db.restaurants.find({ borough: "Staten Island", cuisine: "American" }) – uses index
db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }) – does not use index
db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }) – does not use index

db.restaurants.createIndex( { cuisine: 1 }, { partialFilterExpression: { borough: "Staten
Island"} } )

db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).explain('executionStats')
db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }).explain('executionStats')
db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }).explain('executionStats')


### 4.5 Create an index to make query from task 3.4 covered and provide proof (from explain() or Compass UI) that it is indeed covered

From 3.4 What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without _id.
Query:
db.restaurants.find({ 
	"grades.8.score": { "$lt": 7 } 
	}, { 
	_id: 0, 
	name: 1 
}).pretty()

db.restaurants.createIndex( { "grades.8.score": 1 } ) 